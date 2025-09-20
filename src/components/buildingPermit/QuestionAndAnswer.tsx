import React, { useState } from 'react';
import PrimaryButton from '../shared/primaryButton/PrimaryButton';
import { useDispatch, useSelector } from "react-redux";
interface Question {
    id: number;
    text: string;
    options: {
        id: string;
        text: string;
        type: 'radio' | 'checkbox';
    }[];
    selectedOptions: string[];
}

const QuestionAnswers = ({ currentStep, nextStep }: {
    currentStep: number
    nextStep: () => void
}) => {
    const dispatch = useDispatch();
    const [questions, setQuestions] = useState<Question[]>([
        {
            id: 1,
            text: 'Υπάρχουν αυθαίρετες παραβάσεις/κατασκευές επί κοινοχρήστων χώρων/τμημάτων;',
            options: [
                { id: '1a', text: 'Ναι, όπως στον 2ο - 3ο ορ. μ΄ εύρημα που επεκρατεί η τοιχοποιία, είτε στον ορόφου όπου η επι ατομικής δωματίου είτε στο ακάθ σροος όπως τα χωρουργία είτε σε δωμάτιον στο πατάματος', type: 'checkbox' },
                { id: '1b', text: 'Ναι, ιμοντώ το περίσσουμα της βλαχτίκαιτε, πατήτρικα να αυτό τις ασιτιατοις ακαάυλευτος βλαχτικαίς (Ε.Ο.Τ)', type: 'checkbox' },
                { id: '1c', text: 'Όχι όλα είναι τον 2 ης αιω παρασκευός η προσπάθειας στο ορόφου \'In Rep 1 τον υ Σ4202026.', type: 'checkbox' },
                { id: '1d', text: 'Όχι δεν υπάρχουν', type: 'checkbox' }
            ],
            selectedOptions: ['1a']
        },
        {
            id: 2,
            text: 'Υπάρχουν αυθαίρετες παραβάσεις/κατασκευές επί τμημάτων όπου ανήκουν/ ή βρίσκονται σε αποκλειστική χρήση της διαχείρισης και στήρίζουν ανάπτυξη της επιχείρησης όπως του 2 %;',
            options: [
                { id: '2a', text: 'Ναι, όπως στον 2ο - 3ο ορ. μ΄ εύρημα που επεκρατεί η τοιχοποιία, είτε στον ορόφου όπου η επι ατομικής δωματίου είτε στο ακάθ σροος όπως τα χωρουργία είτε σε δωμάτιον στο πατάματος', type: 'checkbox' },
                { id: '2b', text: 'Ναι, ιμοντώ είναι στου 3 ης αιω παρασκευός η προσπάθειας στο ορόφου \'In Rep 1 τον υ Σ4202026.', type: 'checkbox' },
                { id: '2c', text: 'Ναι, ιμοντώ το περίσσουμα της βλαχτίκαιτε, πατήτρικα να αυτό τις ασιτιατοις ακαάυλευτος βλαχτικαίς (Ε.Ο.Τ)', type: 'checkbox' },
                { id: '2d', text: 'Όχι δεν υπάρχουν', type: 'checkbox' }
            ],
            selectedOptions: ['2b']
        },
        {
            id: 3,
            text: 'Υπάρχουν αυθαίρετες παραβάσεις/κατασκευές επί διαφόρων ιδιοκτησιών;',
            options: [
                { id: '3a', text: 'Ναι, όπως στον 2ο - 3 ως το στεγνούμενα της βλαχτικαιτε εντι βασιχξίσα να αυτό τις ασιτιατοις ακαάυλευτος βλαχτικαίς (Ε.Ο.Τ)', type: 'checkbox' },
                { id: '3b', text: 'Ναι, ιμοντώ είναι στου 3 ης αιω παρασκευός η προσπάθειας στο ορόφου \'In Rep 1 τον υ Σ4202026.', type: 'checkbox' },
                { id: '3c', text: 'Ναι, ιμοντώ το περίσσουμα της βλαχτίκαιτε, πατήτρικα να αυτό τις ασιτιατοις ακαάυλευτος βλαχτικαίς (Ε.Ο.Τ)', type: 'checkbox' },
                { id: '3d', text: 'Όχι δεν υπάρχουν', type: 'checkbox' }
            ],
            selectedOptions: ['3b']
        },
        {
            id: 4,
            text: 'Αντίστοιχη Μελέτη Στατικής Επάρκειας συμβόλων για την Υπουργική απόφαση ΥΠΕΝ/ ΔΙΠΕΑ/1409/1507/2017 (ΦΕΚ Β 1663/05.2018) ;',
            options: [
                { id: '4a', text: 'Ναι υπάρχει', type: 'checkbox' },
                { id: '4b', text: 'Όχι δεν υπάρχει', type: 'checkbox' }
            ],
            selectedOptions: []
        }
    ]);

    const handleOptionChange = (questionId: number, optionId: string) => {
        setQuestions(prev => prev.map(question => {
            if (question.id === questionId) {
                const isSelected = question.selectedOptions.includes(optionId);
                if (isSelected) {
                    return {
                        ...question,
                        selectedOptions: question.selectedOptions.filter(id => id !== optionId)
                    };
                } else {
                    return {
                        ...question,
                        selectedOptions: [...question.selectedOptions, optionId]
                    };
                }
            }
            return question;
        }));
    };

    return (
        <div className="  min-h-screen">
            <h2 className="text-[#333333] text-5xl font-semibold">
                Question Answers
            </h2>
            <div className="mt-6 mb-6">
                <div className="space-y-8">
                    {questions.map((question) => (
                        <div key={question.id} className="border-b border-gray-200 pb-6 last:border-b-0 bg-white p-6 rounded-lg">
                            <h2 className="text-xl  font-semibold text-gray-900 mb-4">
                                {question.id}. {question.text}
                            </h2>

                            <div className="space-y-3">
                                {question.options.map((option) => {
                                    const isSelected = question.selectedOptions.includes(option.id);
                                    return (
                                        <label
                                            key={option.id}
                                            className={`flex items-start space-x-3 p-3 rounded-md cursor-pointer transition-colors ${isSelected ? 'bg-[#D4E9FF] border border-blue-200' : 'hover:bg-[#D4E9FF]'
                                                }`}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={isSelected}
                                                onChange={() => handleOptionChange(question.id, option.id)}
                                                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
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

                        onClick={() => {
                            nextStep();
                        }}
                        label="Save and Continue"

                    />
                </div>
            )}
        </div>
    );
};

export default QuestionAnswers;