import React, { useState } from 'react';
import PrimaryButton from '../shared/primaryButton/PrimaryButton';
import { RootState } from '@/redux/store';
import { useSelector, useDispatch } from "react-redux";
import { setQuestionsAnswer } from '@/redux/features/AI-intrigratoin/aiFileDataSlice';
import { toast } from 'sonner';
import { usePostQuestionsAndAnswerMutation } from '@/redux/features/AI-intrigratoin/aiServiceSlice';
import tokenCatch from '@/lib/token';

interface Question {
    id: number;
    text: string;
    options: {
        id: string;
        text: string;
    }[];
    selectedOption: string | null;
}

const QuestionAnswers = ({ currentStep, nextStep }: {
    currentStep: number
    nextStep: () => void
}) => {
    const stepByStepData: any = useSelector((state: RootState) => state.aiData);
    const projectId = stepByStepData?.projectIdCode?.id;
    const [postQnA] = usePostQuestionsAndAnswerMutation()
    const [questions, setQuestions] = useState<Question[]>([
        {
            id: 1,
            text: 'Υπάρχουν αυθαίρετες παραβάσεις/κατασκευές επί κοινοχρήστων χώρων/τμημάτων;',
            options: [
                { id: 'a', text: 'Ναι, είναι άνω του 2 % και υφίσταται από την ανέγερση της οικοδομής, είναι εντός νομίμου όγκου, έχει παρέλθει δεκαετία μέχρι την έναρξη ισχύος του ν.4495/2017,και δεν έχει εκδοθεί αμετάκλητη δικαστική απόφαση που να διατάσσει την κατεδάφιση.' },
                { id: 'b', text: 'Ναι, ωστόσο το περίγραμμα της ιδιοκτησίας ταυτίζεται με αυτό της σύστασης οριζοντίου ιδιοκτησίας (Σ.Ο.Ι)' },
                { id: 'c', text: 'Όχι, είναι κάτω του 2 % ,και συντρέχουν οι προϋποθέσεις του άρθρου 16 παρ. 1 του ν. 5142/2024.' },
                { id: 'd', text: 'Όχι, δεν υπάρχουν' }
            ],
            selectedOption: null
        },
        {
            id: 2,
            text: 'Υπάρχουν αυθαίρετες παραβάσεις/κατασκευές επί τμημάτων όπου ανήκουν/ ή βρίσκονται σε αποκλειστική χρήση της ιδιοκτησίας και επιφέρουν αύξηση της επιφάνειας άνω του 2% ;',
            options: [
                { id: 'a', text: 'Ναι, είναι άνω του 2 % και υφίσταται από την ανέγερση της οικοδομής, είναι εντός νομίμου όγκου, έχει παρέλθει δεκαετία μέχρι την έναρξη ισχύος του ν.4495/2017,και δεν έχει εκδοθεί αμετάκλητη δικαστική απόφαση που να διατάσσει την κατεδάφιση.' },
                { id: 'b', text: 'Ναι, ωστόσο είναι κάτω του 2 % ,και συντρέχουν οι προϋποθέσεις του άρθρου 16 παρ. 1 του ν. 5142/2024.' },
                { id: 'c', text: 'Ναι, ωστόσο το περίγραμμα της ιδιοκτησίας ταυτίζεται με αυτό της σύστασης οριζοντίου ιδιοκτησίας (Σ.Ο.Ι)' },
                { id: 'd', text: 'Όχι, δεν υπάρχουν' }
            ],
            selectedOption: null
        },
        {
            id: 3,
            text: 'Υπάρχουν αυθαίρετες παραβάσεις/κατασκευές επί όμορων ιδιοκτησιών;',
            options: [
                { id: 'a', text: 'Ναι, είναι άνω του 2 % και το περίγραμμα της ιδιοκτησίας δεν ταυτίζεται με αυτό της σύστασης οριζοντίου ιδιοκτησίας (Σ.Ο.Ι)' },
                { id: 'b', text: 'Ναι, ωστόσο είναι κάτω του 2 % ,και συντρέχουν οι προϋποθέσεις του άρθρου 16 παρ. 1 του ν. 5142/2024.' },
                { id: 'c', text: 'Ναι, ωστόσο το περίγραμμα της ιδιοκτησίας ταυτίζεται με αυτό της σύστασης οριζοντίου ιδιοκτησίας (Σ.Ο.Ι).' },
                { id: 'd', text: 'Όχι, δεν υπάρχουν' }
            ],
            selectedOption: null
        },
        {
            id: 4,
            text: 'Απαιτείται Μελέτη Στατικής Επάρκειας σύμφωνα με την Υπουργική απόφαση ΥΠΕΝ/ΔΑΟΚΑ/19409/1507/2017 (ΦΕΚ Β 1643/11.05.2018) ;',
            options: [
                { id: 'a', text: 'Ναι, απαιτείται' },
                { id: 'b', text: 'Όχι, δεν απαιτείται' }
            ],
            selectedOption: null
        }
    ]);
    const violations = useSelector((state: RootState) => state.aiData.violations);
    const dispatch = useDispatch();
    const accessToken = tokenCatch();

    // State for showing warnings
    const [showWarnings, setShowWarnings] = useState<boolean>(false);

    const handleOptionChange = (questionId: number, optionId: string) => {
        setQuestions(prev => prev.map(question => {
            if (question.id === questionId) {
                return {
                    ...question,
                    selectedOption: optionId
                };
            }
            return question;
        }));
    };

    // Check if all questions are answered
    const areAllQuestionsAnswered = () => {
        return questions.every(question => question.selectedOption !== null);
    };

    // Get unanswered questions for warning display
    const getUnansweredQuestions = () => {
        return questions.filter(question => question.selectedOption === null);
    };

    const handleSaveAndContinue = async () => {
        // Validate that all questions are answered
        if (!areAllQuestionsAnswered()) {
            setShowWarnings(true);
            toast.error("Παρακαλώ απαντήστε σε όλες τις ερωτήσεις προτού συνεχίσετε");
            return;
        }

        setShowWarnings(false);

        // Create simplified data structure with only question and answer
        const simplifiedData = questions.map(question => ({
            question: question.id,
            answer: question.selectedOption
                ? question.options.find(opt => opt.id === question.selectedOption)?.id
                : null
        }));

        // Log the simplified data to console
        console.log("Question Answers Data:", simplifiedData);

        // Continue to next step
        try {
            const res = await postQnA({ payload: simplifiedData, accessToken, id: projectId }).unwrap();
            console.log("resposive", res);
            if (res?.success) {
                dispatch(setQuestionsAnswer(simplifiedData));
                nextStep();
            }
        } catch (error: any) {
            toast.error(error.data.message);
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen">
            {/* Progress indicator */}
            <div className="mb-6 p-5 bg-blue-50 border border-blue-200 rounded-lg sticky top-24 z-10">
                <div className="flex items-center justify-between">
                    <span className="text-blue-800 text-sm font-medium">
                        Πρόοδος: {questions.filter(q => q.selectedOption !== null).length} από {questions.length} ερωτήσεις απαντήθηκαν
                    </span>
                    {areAllQuestionsAnswered() && (
                        <span className="text-green-600 text-sm font-medium flex items-center space-x-1">
                            <span>✓ Όλες οι ερωτήσεις απαντήθηκαν</span>
                        </span>
                    )}
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                    <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{
                            width: `${(questions.filter(q => q.selectedOption !== null).length / questions.length) * 100}%`
                        }}
                    ></div>
                </div>
            </div>
            <h2 className="text-[#333333] text-5xl font-semibold">
                Question Answers
            </h2>

            {/* Global Warning Message */}
            {showWarnings && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center space-x-2 text-red-700">
                        <span className="text-sm font-medium">⚠️ Παρακαλώ απαντήστε σε όλες τις ερωτήσεις προτού συνεχίσετε</span>
                    </div>
                    {getUnansweredQuestions().length > 0 && (
                        <div className="mt-2">
                            <p className="text-red-600 text-sm font-medium">Μη απαντημένες ερωτήσεις:</p>
                            <ul className="list-disc list-inside text-red-600 text-sm mt-1">
                                {getUnansweredQuestions().map(question => (
                                    <li key={question.id}>Ερώτηση {question.id}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            <div className="mt-6 mb-6">
                <div className="space-y-8">
                    {questions.map((question) => {
                        const isUnanswered = showWarnings && question.selectedOption === null;

                        return (
                            <div
                                key={question.id}
                                className={`border-b border-gray-200 pb-6 last:border-b-0 bg-white p-6 rounded-lg transition-all ${isUnanswered ? 'border-2 border-red-500 bg-red-50' : ''
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        {question.id}. {question.text}
                                        <span className="text-red-500 ml-1">*</span>
                                    </h2>
                                    {isUnanswered && (
                                        <span className="text-red-500 text-sm font-medium flex items-center space-x-1">
                                            <span>⚠️ Απαιτείται απάντηση</span>
                                        </span>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    {question.options.map((option) => {
                                        const isSelected = question.selectedOption === option.id;
                                        return (
                                            <label
                                                key={option.id}
                                                className={`flex items-start space-x-3 p-3 rounded-md cursor-pointer transition-colors ${isSelected
                                                    ? 'bg-[#D4E9FF] border border-blue-200'
                                                    : isUnanswered
                                                        ? 'hover:bg-red-100 border border-red-100'
                                                        : 'hover:bg-gray-50'
                                                    } ${isUnanswered ? 'border-red-200' : ''
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name={`question-${question.id}`}
                                                    checked={isSelected}
                                                    onChange={() => handleOptionChange(question.id, option.id)}
                                                    className={`mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 ${isUnanswered ? 'border-red-300' : 'border-gray-300'
                                                        }`}
                                                />
                                                <span className={`text-sm leading-relaxed ${isSelected
                                                    ? 'text-blue-900'
                                                    : isUnanswered
                                                        ? 'text-gray-800'
                                                        : 'text-gray-700'
                                                    }`}>
                                                    {option.text}
                                                </span>
                                            </label>
                                        );
                                    })}
                                </div>

                                {/* Individual question warning */}
                                {isUnanswered && (
                                    <div className="mt-3 flex items-center space-x-1">
                                        <span className="text-red-500 text-xs">⚠️ Παρακαλώ επιλέξτε μια απάντηση για αυτή την ερώτηση</span>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>



            {/* Next Button */}
            {currentStep < 7 && (
                <div className="flex justify-end w-fit ml-auto">
                    <PrimaryButton
                        onClick={handleSaveAndContinue}
                        label="Save and Continue"
                    />
                </div>
            )}
        </div>
    );
};

export default QuestionAnswers;