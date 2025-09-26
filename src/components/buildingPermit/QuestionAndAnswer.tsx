import React, { useState } from 'react';
import PrimaryButton from '../shared/primaryButton/PrimaryButton';

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
    const [questions, setQuestions] = useState<Question[]>([
        {
            id: 1,
            text: 'Υπάρχουν αυθαίρετες παραβάσεις/κατασκευές επί κοινοχρήστων χώρων/τμημάτων;',
            options: [
                { id: '1a', text: 'Ναι, είναι άνω του 2 % και υφίσταται από την ανέγερση της οικοδομής, είναι εντός νομίμου όγκου, έχει παρέλθει δεκαετία μέχρι την έναρξη ισχύος του ν.4495/2017,και δεν έχει εκδοθεί αμετάκλητη δικαστική απόφαση που να διατάσσει την κατεδάφιση.' },
                { id: '1b', text: 'Ναι, ωστόσο το περίγραμμα της ιδιοκτησίας ταυτίζεται με αυτό της σύστασης οριζοντίου ιδιοκτησίας (Σ.Ο.Ι)' },
                { id: '1c', text: 'Όχι, είναι κάτω του 2 % ,και συντρέχουν οι προϋποθέσεις του άρθρου 16 παρ. 1 του ν. 5142/2024.' },
                { id: '1d', text: 'Όχι, δεν υπάρχουν' }
            ],
            selectedOption: null
        },
        {
            id: 2,
            text: 'Υπάρχουν αυθαίρετες παραβάσεις/κατασκευές επί τμημάτων όπου ανήκουν/ ή βρίσκονται σε αποκλειστική χρήση της ιδιοκτησίας και επιφέρουν αύξηση της επιφάνειας άνω του 2% ;',
            options: [
                { id: '2a', text: 'Ναι, είναι άνω του 2 % και υφίσταται από την ανέγερση της οικοδομής, είναι εντός νομίμου όγκου, έχει παρέλθει δεκαετία μέχρι την έναρξη ισχύος του ν.4495/2017,και δεν έχει εκδοθεί αμετάκλητη δικαστική απόφαση που να διατάσσει την κατεδάφιση.' },
                { id: '2b', text: 'Ναι, ωστόσο είναι κάτω του 2 % ,και συντρέχουν οι προϋποθέσεις του άρθρου 16 παρ. 1 του ν. 5142/2024.' },
                { id: '2c', text: 'Ναι, ωστόσο το περίγραμμα της ιδιοκτησίας ταυτίζεται με αυτό της σύστασης οριζοντίου ιδιοκτησίας (Σ.Ο.Ι)' },
                { id: '2d', text: 'Όχι, δεν υπάρχουν' }
            ],
            selectedOption: null
        },
        {
            id: 3,
            text: 'Υπάρχουν αυθαίρετες παραβάσεις/κατασκευές επί όμορων ιδιοκτησιών;',
            options: [
                { id: '3a', text: 'Ναι, είναι άνω του 2 % και το περίγραμμα της ιδιοκτησίας δεν ταυτίζεται με αυτό της σύστασης οριζοντίου ιδιοκτησίας (Σ.Ο.Ι)' },
                { id: '3b', text: 'Ναι, ωστόσο είναι κάτω του 2 % ,και συντρέχουν οι προϋποθέσεις του άρθρου 16 παρ. 1 του ν. 5142/2024.' },
                { id: '3c', text: 'Ναι, ωστόσο το περίγραμμα της ιδιοκτησίας ταυτίζεται με αυτό της σύστασης οριζοντίου ιδιοκτησίας (Σ.Ο.Ι).' },
                { id: '3d', text: 'Όχι, δεν υπάρχουν' }
            ],
            selectedOption: null
        },
        {
            id: 4,
            text: 'Απαιτείται Μελέτη Στατικής Επάρκειας σύμφωνα με την Υπουργική απόφαση ΥΠΕΝ/ΔΑΟΚΑ/19409/1507/2017 (ΦΕΚ Β 1643/11.05.2018) ;',
            options: [
                { id: '4a', text: 'Ναι, απαιτείται' },
                { id: '4b', text: 'Όχι, δεν απαιτείται' }
            ],
            selectedOption: null
        }
    ]);

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

    const handleSaveAndContinue = () => {
        // Create simplified data structure with only question and answer
        const simplifiedData = questions.map(question => ({
            question: question.text,
            answer: question.selectedOption
                ? question.options.find(opt => opt.id === question.selectedOption)?.text
                : null
        }));

        // Log the simplified data to console
        console.log("Question Answers Data:", simplifiedData);

        // Continue to next step
        nextStep();
    };

    return (
        <div className="min-h-screen">
            <h2 className="text-[#333333] text-5xl font-semibold">
                Question Answers
            </h2>
            <div className="mt-6 mb-6">
                <div className="space-y-8">
                    {questions.map((question) => (
                        <div key={question.id} className="border-b border-gray-200 pb-6 last:border-b-0 bg-white p-6 rounded-lg">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                {question.id}. {question.text}
                            </h2>

                            <div className="space-y-3">
                                {question.options.map((option) => {
                                    const isSelected = question.selectedOption === option.id;
                                    return (
                                        <label
                                            key={option.id}
                                            className={`flex items-start space-x-3 p-3 rounded-md cursor-pointer transition-colors ${isSelected ? 'bg-[#D4E9FF] border border-blue-200' : 'hover:bg-gray-50'
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                name={`question-${question.id}`}
                                                checked={isSelected}
                                                onChange={() => handleOptionChange(question.id, option.id)}
                                                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                            />
                                            <span className={`text-sm leading-relaxed ${isSelected ? 'text-blue-900' : 'text-gray-700'
                                                }`}>
                                                {option.text}
                                            </span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
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