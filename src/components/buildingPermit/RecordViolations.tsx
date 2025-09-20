import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { ChevronDown, FileText, Plus, X } from 'lucide-react';
import PrimaryButton from '../shared/primaryButton/PrimaryButton';

// Enhanced violations database based on categories
const violationsDatabase = {
    // Categories 1, 2, 4, 5
    general: [
        'Αλλαγή χρήσης βοηθητικού χώρου σε κατοικία',
        'Αλλαγή χρήσης από αποθήκη σε κατοικία',
        'Αλλαγή χρήσης από αποθήκη σε επαγγελματικό χώρο/κατάστημα',
        'Αλλαγή χρήσης από θέση στάθμευσης σε κατοικία',
        'Αλλαγή χρήσης υπογείου βοηθητικού χώρου σε κατοικία',
        'Υπέρβαση δόμησης συνολικής επιφάνειας κύριων χώρων',
        'Υπέρβαση δόμησης & κάλυψης συνολικής επιφάνειας κύριων χώρων',
        'Υπέρβαση δόμησης & κάλυψης ημιυπαίθριου χώρου',
        'Υπέρβαση δόμησης & κάλυψης επί κοινοχρήστου φωταγωγού',
        'Υπέρβαση δόμησης & κάλυψης ημιυπαίθριου χώρου',
        'Υπέρβαση δόμησης προς εξώστη',
        'Υπέρβαση δόμησης προς ακάλυπτο χώρο',
        'Υπέρβαση δόμησης προς πρασιά/προκήπιο',
        'Υπέρβαση δόμησης προς κοινόχρηστο τμήμα/κλιμακοστάσιο',
        'Υπέρβαση δόμησης προς κοινόχρηστο τμήμα/διάδρομο',
        'Υπέρβαση δόμησης προς κοινόχρηστο τμήμα/πιλοτή',
        'Υπέρβαση δόμησης εντός και εκτός πλάγιων αποστάσεων',
        'Υπέρβαση δόμησης επί κοινοχρήστου φωταγωγού',
        'Υπέρβαση δόμησης για τη κατασκευή σοφίτας',
        'Κατασκευή σοφίτας',
        'Υπέρβαση δόμησης λόγω κατασκευής παταριού',
        'Υπέρβαση δόμησης λόγω επέκτασης παταριού',
        'Υπέρβαση ύψους ορόφου',
        'Υπέρβαση ύψους δώματος ή στέγης'
    ],

    // Category 3 basic violations
    category3Basic: [
        'Μείωση φύτευσης ακάλυπτου χώρου οικοπέδου έως 20%',
        'Προσθήκη εξωτερικής θερμομόνωσης στις όψεις κτιρίου',
        'Αλλαγή διαστάσεων εξωστών με υπέρβαση επιφανείας έως 20%',
        'Αλλαγή διαστάσεων ή μετατόπιση υφιστάμενων ανοιγμάτων',
        'Κατασκευή πέργκολας μέγιστης επιφάνειας έως 50 τ.μ.',
        'Φύτευση υποχρεωτικής υπαίθριας θέσης στάθμευσης',
        'Δεξαμενή αποχέτευσης στεγανές, απορροφητικές ή νερού',
        'Οικίσκος αντλητικών εγκαταστάσεων με νόμιμες διαστάσεις',
        'Διαμόρφωση εδάφους με ύψος έως ένα μέτρο',
        'Υπέρβαση περιτοίχισης έως 1 μ. κατοικία, 2 μ. βιομηχανία',
        'Υπέρβαση ύψους καμινάδας έως 1,5 μ. ή πέργκολας',
        'Κατασκευή αποθήκης έως 15 τ.μ. και 2,5 μ. ύψος',
        'Υπέρβαση ύψους αποθηκών έως 20% της άδειας',
        'Αλλαγή θέσης κτιρίου χωρίς παραβίαση όρων δόμησης',
        'Μεταβολή περιγράμματος του κτιρίου έως 5%',
        'Μεταβολή περιγράμματος ιδιοκτησίας έως 5%',
        'Πρόχειρες προσωρινές κατασκευές από πανί ή νάιλον',
        'Πρόχειρες ξύλινες κατασκευές έως 8 τ.μ., ύψος 2,5 μ., σε ακάλυπτο χώρο'
    ],

    // Category 3 remaining violations
    category3Remaining: [
        'Αλλαγή διαστάσεων εξωστών με υπέρβαση επιφανείας άνω του 20%',
        'Επέκταση εξώστη – αύξηση προβολής ή επιφάνειας εξώστη',
        'Κατασκευή νέου εξώστη- αυθαίρετη προσθήκη',
        'Κατασκευή νέων ανοιγμάτων επί των όψεων',
        'Κατασκευή νέας εστίας τζακιού με καπνοδόχο',
        'Κατασκευή εξωτερικής μεταλλικής κλίμακας',
        'Κаτασκευή εξωτερικής κλίμακας από σκυρόδεμα',
        'Επέκταση υφιστάμενης κλίμακας',
        'Τοποθέτηση ηλιακού συλλέκτη – εγκατάσταση σε στέγη ή δώμα',
        'Κατασκευή νέας εστίας τζακιού – δημιουργία τζακιού με καπνοδόχο',
        'Μετατόπιση θέσης τζακιού – αλλαγή θέσης υφιστάμενου τζακιού',
        'Υπέρβαση ύψους καπνοδόχου – ανύψωση >1,50 μ. πέραν επιτρεπτού',
        'Κατασκευή υπαίθριου BBQ – δημιουργία σταθερής εστίας μαγειρέματος',
        'Δημιουργία νέου ανοίγματος – διάνοιξη θύρας ή παραθύρου',
        'Κατάργηση ανοίγματος –παραθύρου ή θύρας',
        'Κατάργηση εξώστη',
        'Μετατόπιση ανοίγματος – αλλαγή θέσης θύρας/παραθύρου',
        'Ξεμπάζωμα υπογείου χώρου',
        'Αλλαγή στάθμης θεμελίωσης σε σχέση με τα εγκεκριμένα σχέδια',
        'Κατασκευή αρχιτεκτονικής προεξοχής',
        'Κατάργηση τμήματος εξώστη',
        'Απομείωση τμήματος εξώστη λόγω επέκτασης της ιδιοκτησίας',
        'Διαμερισμάτωση με όμορη ιδιοκτησία',
        'Διαμερισμάτωση επί κοινοχρήστου φωταγωγού',
        'Διαμερισμάτωση με ημιυπαίθριο χώρο',
        'Διαμερισμάτωση με κοινόχρηστο τμήμα/κλιμακοστάσιο',
        'Διαμερισμάτωση με κοινόχρηστο τμήμα/διάδρομο κλιμακοστασίου',
        'Διαμερισμάτωση/Διαχωρισμός ιδιοκτησίας σε δύο ανεξάρτητες ιδιοκτησίες',
        'Διαμερισμάτωση ιδιοκτησίας σε περισσότερα μικρότερα τμήματα',
        'Διαμερισμάτωση/Λειτουργική συνένωση δύο ή περισσότερων διαμερισμάτων σε ένα',
        'Υπέρβαση ύψους ορόφου/ιδιοκτησίας εντός εγκεκριμένου ύψους',
        'Αλλαγή χρήσης αποθήκης σε χώρο στάθμευσης',
        'Αλλαγή χρήσης χώρου στάθμευσης σε αποθήκη',
        'Αλλαγή χώρου χρήσης κατοικίας σε επαγγελματικό χώρο',
        'Αλλαγή χώρου χρήσης επαγγελματικού χώρο σε κατοικία',
        'Αλλαγή χρήσης βοηθητικών χώρων σε κύριο χώρο',
        'Κατασκευή αποθήκης άνω των 15 τ.μ. και 2,5 μ. ύψος'
    ]
};

// Create a form component that can be reused
type ViolationFormProps = {
    index: number;
    onRemove: () => void;
    onFormDataChange: (data: any) => void;
};

const ViolationForm = forwardRef(({ index, onRemove, onFormDataChange }: ViolationFormProps, ref) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState<boolean>(false);

    const [violationInput, setViolationInput] = useState<string>("");
    const [selectedViolations, setSelectedViolations] = useState<string[]>([]);
    const [violationSuggestions, setViolationSuggestions] = useState<string[]>([]);
    const [showViolationSuggestions, setShowViolationSuggestions] = useState<boolean>(false);

    const [selectedAge, setSelectedAge] = useState<string>("");
    const [isAgeDropdownOpen, setIsAgeDropdownOpen] = useState<boolean>(false);

    const [showOtherViolation, setShowOtherViolation] = useState<boolean>(false);
    const [otherViolationInput, setOtherViolationInput] = useState<string>("");
    const [otherViolationSuggestions, setOtherViolationSuggestions] = useState<string[]>([]);
    const [showOtherViolationSuggestions, setShowOtherViolationSuggestions] = useState<boolean>(false);

    const [showRemainingViolations, setShowRemainingViolations] = useState<boolean>(false);

    const categories: string[] = ["1", "2", "3", "4", "5"];

    const ageOptions: string[] = [
        "Προ της 9/6/1975",
        "Μέχρι 31/12/1982",
        "Από 1/1/1983 μέχρι 31/12/1992",
        "Από 1/1/1993 μέχρι 31/12/2003",
        "Από 1/1/2004 μέχρι 28/7/2011",
    ];

    const categoriesWithOtherViolation: string[] = ["1", "2", "4", "5"];

    // Expose form data via ref
    useImperativeHandle(ref, () => ({
        getFormData: () => {
            return {
                formId: index,
                category: selectedCategory,
                violations: selectedViolations,
                otherViolation: showOtherViolation ? otherViolationInput : null,
                age: selectedAge,
                showRemainingViolations: selectedCategory === "3" ? showRemainingViolations : null
            };
        }
    }));

    // Notify parent when form data changes
    React.useEffect(() => {
        if (onFormDataChange) {
            onFormDataChange({
                formId: index,
                category: selectedCategory,
                violations: selectedViolations,
                otherViolation: showOtherViolation ? otherViolationInput : null,
                age: selectedAge,
                showRemainingViolations: selectedCategory === "3" ? showRemainingViolations : null
            });
        }
    }, [selectedCategory, selectedViolations, otherViolationInput, selectedAge, showRemainingViolations]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setIsCategoryDropdownOpen(false);

        setSelectedViolations([]);
        setViolationInput("");
        setShowViolationSuggestions(false);

        if (!categoriesWithOtherViolation.includes(category)) {
            setShowOtherViolation(false);
            setOtherViolationInput("");
        }

        if (category !== "3") {
            setShowRemainingViolations(false);
        }
    };

    const getViolationDatabase = (): string[] => {
        if (selectedCategory === "3") {
            return showRemainingViolations
                ? violationsDatabase.category3Remaining
                : violationsDatabase.category3Basic;
        }
        return violationsDatabase.general;
    };

    const handleViolationInputChange = (value: string) => {
        setViolationInput(value);

        if (value.trim()) {
            const database = getViolationDatabase();
            const filtered = database.filter((violation) =>
                violation.toLowerCase().includes(value.toLowerCase())
            );
            setViolationSuggestions(filtered);
            setShowViolationSuggestions(true);
        } else {
            setShowViolationSuggestions(false);
        }
    };

    const handleViolationSelect = (violation: string) => {
        if (!selectedViolations.includes(violation)) {
            setSelectedViolations([...selectedViolations, violation]);
        }
        setViolationInput("");
        setShowViolationSuggestions(false);
    };

    const removeViolation = (idx: number) => {
        setSelectedViolations(selectedViolations.filter((_, i) => i !== idx));
    };

    const handleOtherViolationInputChange = (value: string) => {
        setOtherViolationInput(value);

        if (value.trim()) {
            const filtered = violationsDatabase.general.filter((violation) =>
                violation.toLowerCase().includes(value.toLowerCase())
            );
            setOtherViolationSuggestions(filtered);
            setShowOtherViolationSuggestions(true);
        } else {
            setShowOtherViolationSuggestions(false);
        }
    };

    const handleOtherViolationSelect = (violation: string) => {
        setOtherViolationInput(violation);
        setShowOtherViolationSuggestions(false);
    };

    const handleRemainingViolationsChange = (checked: boolean) => {
        setShowRemainingViolations(checked);
        setSelectedViolations([]);
        setViolationInput("");
        setShowViolationSuggestions(false);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg mb-6 relative">
            {index > 0 && (
                <button
                    type="button"
                    onClick={onRemove}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors z-10"
                >
                    <X size={20} />
                </button>
            )}

            <div className="px-6 pt-6">
                <div className="flex items-center space-x-3">
                    <h2 className="text-xl font-semibold">
                        Φύλλο Καταγραφής {String.fromCharCode(65 + index)}
                    </h2>
                </div>
            </div>

            <div className="p-6 space-y-6">
                {/* Category Dropdown */}
                <div className="space-y-2">
                    <label className="text-sm font-medium block">Κατηγορία Υπαγωγής</label>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left focus:outline-none flex items-center justify-between"
                        >
                            <span className="text-sm">
                                {selectedCategory || "Επιλέξτε κατηγορία..."}
                            </span>
                            <ChevronDown
                                className={`text-gray-400 transform transition-transform duration-200 ${isCategoryDropdownOpen ? "rotate-180" : ""
                                    }`}
                                size={16}
                            />
                        </button>

                        {isCategoryDropdownOpen && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                                {categories.map((category, idx) => (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => handleCategoryChange(category)}
                                        className={`w-full px-3 py-2 text-left text-sm hover:bg-blue-50 ${selectedCategory === category
                                            ? "bg-blue-100 text-blue-800 font-medium"
                                            : ""
                                            } ${idx === 0 ? "rounded-t-md" : ""} ${idx === categories.length - 1
                                                ? "rounded-b-md"
                                                : "border-b border-gray-200"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Category 3 toggle */}
                {selectedCategory === "3" && (
                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            id={`remaining-violations-${index}`}
                            checked={showRemainingViolations}
                            onChange={(e) => handleRemainingViolationsChange(e.target.checked)}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                        />
                        <label
                            htmlFor={`remaining-violations-${index}`}
                            className="text-sm font-medium cursor-pointer"
                        >
                            Λοιπές Παραβάσεις Κατηγορίας 3
                        </label>
                    </div>
                )}

                {/* Other Violation */}
                {categoriesWithOtherViolation.includes(selectedCategory) && (
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                id={`other-violation-${index}`}
                                checked={showOtherViolation}
                                onChange={(e) => setShowOtherViolation(e.target.checked)}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                            />
                            <label
                                htmlFor={`other-violation-${index}`}
                                className="text-sm font-medium cursor-pointer"
                            >
                                Λοιπή Παράβαση
                            </label>
                        </div>

                        {showOtherViolation && (
                            <div className="relative ml-7">
                                <input
                                    type="text"
                                    value={otherViolationInput}
                                    onChange={(e) => handleOtherViolationInputChange(e.target.value)}
                                    placeholder="Περιγραφή λοιπής παράβασης..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />

                                {showOtherViolationSuggestions &&
                                    otherViolationSuggestions.length > 0 && (
                                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                                            {otherViolationSuggestions.map((suggestion, idx) => (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    onClick={() => handleOtherViolationSelect(suggestion)}
                                                    className="w-full px-3 py-2 text-left text-sm hover:bg-blue-50"
                                                >
                                                    {suggestion}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                            </div>
                        )}
                    </div>
                )}

                {/* Violations autocomplete */}
                <div className="space-y-2">
                    <label className="text-sm font-medium block">
                        Παράβαση{" "}
                        {selectedCategory === "3" && (
                            <span className="text-xs text-gray-500 ml-2">
                                ({showRemainingViolations ? "Λοιπές" : "Βασικές"})
                            </span>
                        )}
                    </label>

                    {selectedViolations.length > 0 && (
                        <div className="space-y-2 mb-3">
                            {selectedViolations.map((violation, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-md px-3 py-2"
                                >
                                    <span className="text-sm text-blue-800">{violation}</span>
                                    <button
                                        type="button"
                                        onClick={() => removeViolation(idx)}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="relative">
                        <input
                            type="text"
                            value={violationInput}
                            onChange={(e) => handleViolationInputChange(e.target.value)}
                            placeholder="Αρχίστε να πληκτρολογείτε..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            disabled={!selectedCategory}
                        />

                        {showViolationSuggestions && violationSuggestions.length > 0 && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                                {violationSuggestions.map((suggestion, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => handleViolationSelect(suggestion)}
                                        className="w-full px-3 py-2 text-left text-sm hover:bg-blue-50"
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Age dropdown */}
                <div className="space-y-2">
                    <label className="text-sm font-medium block">Παλαιότητα</label>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setIsAgeDropdownOpen(!isAgeDropdownOpen)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left flex items-center justify-between"
                        >
                            <span className="text-sm">
                                {selectedAge || "Επιλέξτε παλαιότητα..."}
                            </span>
                            <ChevronDown
                                className={`text-gray-400 transform transition-transform duration-200 ${isAgeDropdownOpen ? "rotate-180" : ""
                                    }`}
                                size={16}
                            />
                        </button>

                        {isAgeDropdownOpen && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                                {ageOptions.map((option, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => {
                                            setSelectedAge(option);
                                            setIsAgeDropdownOpen(false);
                                        }}
                                        className={`w-full px-3 py-2 text-left text-sm hover:bg-blue-50 ${selectedAge === option
                                            ? "bg-blue-100 text-blue-800 font-medium"
                                            : ""
                                            } ${idx === 0 ? "rounded-t-md" : ""} ${idx === ageOptions.length - 1
                                                ? "rounded-b-md"
                                                : "border-b border-gray-200"
                                            }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});

function RecordViolations({ currentStep = 1, nextStep = () => { } }) {
    const [forms, setForms] = useState([{ id: 0 }]);
    const formRefs = React.useRef<Array<{ getFormData: () => any } | null>>([]);

    const addForm = () => {
        const newId = forms.length > 0 ? Math.max(...forms.map(f => f.id)) + 1 : 0;
        setForms([...forms, { id: newId }]);
    };

    const removeForm = (id: number) => {
        if (forms.length > 1) {
            setForms(forms.filter(form => form.id !== id));
        }
    };

    const handleSaveAndContinue = () => {
        // Collect data from all forms
        const allFormData = formRefs.current
            .filter(ref => ref !== null)
            .map(ref => ref.getFormData());

        // Log the data to console
        console.log("All Form Data:", allFormData);

        // Continue to next step
        nextStep();
    };

    return (
        <div className="">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-[#333333] text-4xl font-semibold">
                    Record Violations
                </h2>
                <div className="w-fit ml-auto">

                    <PrimaryButton
                        onClick={addForm}
                    >
                        <div className='flex items-center justify-center '>
                            <Plus size={20} />
                            <span>Προσθήκη Φόρμας</span>
                        </div>
                    </PrimaryButton>
                </div>
            </div>

            <div className="space-y-6">
                {forms.map((form, index) => (
                    <ViolationForm
                        key={form.id}
                        ref={el => { formRefs.current[index] = el as { getFormData: () => any } | null; }}
                        index={index}
                        onRemove={() => removeForm(form.id)}
                        onFormDataChange={(data) => {
                            // Optional: handle individual form changes if needed
                        }}
                    />
                ))}
            </div>

            {currentStep < 7 && (
                <div className="flex justify-end mt-8 w-fit ml-auto">
                    <PrimaryButton
                        onClick={handleSaveAndContinue}
                    >
                        Save and Continue
                    </PrimaryButton>
                </div>
            )}
        </div>
    );
}

export default RecordViolations;