import { useState } from "react";

type Question = {
  id: number;
  text: string;
  options: { id: number; text: string; isCorrect: boolean }[];
};

const questions: Question[] = [
  {
    id: 1,
    text: "Υπάρχουν αυθαίρετες παραβάσεις/κατασκευές επί κοινοχρήστων χώρων/τμημάτων;",
    options: [
      {
        id: 1,
        text: "Ναι, είναι άνω του 2 % και υφίσταται από την ανέγερση της οικοδομής, είναι εντός νομίμου όγκου, έχει παρέλθει δεκαετία μέχρι την έναρξη ισχύος του ν.4495/2017,και δεν έχει εκδοθεί αμετάκλητη δικαστική απόφαση που να διατάσσει την κατεδάφιση.",
        isCorrect: true,
      },
      {
        id: 2,
        text: "Ναι, ωστόσο το περίγραμμα της ιδιοκτησίας ταυτίζεται με αυτό της σύστασης οριζοντίου ιδιοκτησίας (Σ.Ο.Ι)",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Όχι, είναι κάτω του 2 % ,και συντρέχουν οι προϋποθέσεις του άρθρου 16 παρ. 1 του ν. 5142/2024.",
        isCorrect: false,
      },
      { id: 4, text: "Όχι, δεν υπάρχουν", isCorrect: false },
    ],
  },
  {
    id: 2,
    text: "Υπάρχουν αυθαίρετες παραβάσεις/κατασκευές επί τμημάτων όπου ανήκουν/ ή βρίσκονται σε αποκλειστική χρήση της ιδιοκτησίας και επιφέρουν αύξηση της επιφάνειας άνω του 2%;",
    options: [
      {
        id: 1,
        text: "Ναι, είναι άνω του 2 % και υφίσταται από την ανέγερση της οικοδομής, είναι εντός νομίμου όγκου, έχει παρέλθει δεκαετία μέχρι την έναρξη ισχύος του ν.4495/2017,και δεν έχει εκδοθεί αμετάκλητη δικαστική απόφαση που να διατάσσει την κατεδάφιση.",
        isCorrect: true,
      },
      {
        id: 2,
        text: "Ναι, ωστόσο είναι κάτω του 2 % ,και συντρέχουν οι προϋποθέσεις του άρθρου 16 παρ. 1 του ν. 5142/2024.",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Ναι, ωστόσο το περίγραμμα της ιδιοκτησίας ταυτίζεται με αυτό της σύστασης οριζοντίου ιδιοκτησίας (Σ.Ο.Ι)",
        isCorrect: false,
      },
      { id: 4, text: "Όχι, δεν υπάρχουν", isCorrect: false },
    ],
  },
  {
    id: 3,
    text: "Υπάρχουν αυθαίρετες παραβάσεις/κατασκευές επί όμορων ιδιοκτησιών;",
    options: [
      {
        id: 1,
        text: "Ναι, είναι άνω του 2 % και το περίγραμμα της ιδιοκτησίας δεν ταυτίζεται με αυτό της σύστασης οριζοντίου ιδιοκτησίας (Σ.Ο.Ι)",
        isCorrect: true,
      },
      {
        id: 2,
        text: "Ναι, ωστόσο είναι κάτω του 2 % ,και συντρέχουν οι προϋποθέσεις του άρθρου 16 παρ. 1 του ν. 5142/2024.",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Ναι, ωστόσο το περίγραμμα της ιδιοκτησίας ταυτίζεται με αυτό της σύστασης οριζοντίου ιδιοκτησίας (Σ.Ο.Ι).",
        isCorrect: false,
      },
      { id: 4, text: "Όχι, δεν υπάρχουν", isCorrect: false },
    ],
  },
  {
    id: 4,
    text: "Απαιτείται Μελέτη Στατικής Επάρκειας σύμφωνα με την Υπουργικής απόφαση ΥΠΕΝ/ΔΑΟΚΑ/19409/1507/2017 (ΦΕΚ Β 1643/11.05.2018);",
    options: [
      { id: 1, text: "Ναι, απαιτείται", isCorrect: true },
      { id: 2, text: "Όχι, δεν απαιτείται", isCorrect: false },
    ],
  },
];

const QuestionAndAnswer = () => {
  const [answers, setAnswers] = useState<{ [key: number]: number | null }>({});

  const handleSelect = (qId: number, optionId: number) => {
    setAnswers((prev) => ({ ...prev, [qId]: optionId }));
  };

  const checkResults = () => {
    let score = 0;
    questions.forEach((q) => {
      const selected = answers[q.id];
      const correct = q.options.find((o) => o.isCorrect)?.id;
      if (selected === correct) score++;
    });
    alert(`You scored ${score} / ${questions.length}`);
  };
  return (
    <div>
      <div className="">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Question And Answer
          </h1>
          {/* <p className="text-gray-600 text-lg">if not clear from document</p> */}
        </div>
        <div>
          <div className="mt-10">
            {/* 2 Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {questions.map((q, i) => (
                <div
                  key={q.id}
                  className="p-5 border border-gray-300 bg-white rounded-xl shadow-sm"
                >
                  <p className="font-semibold mb-3">{`(${i + 1}) . ${
                    q.text
                  }`}</p>
                  <div className="">
                    {q.options.map((opt) => (
                      <label
                        key={opt.id}
                        className="flex  gap-2 hover:rounded-md pl-3 py-2 hover:bg-blue-50 hover:p2-3 cursor-pointer"
                      >
                        <div>
                          <input
                            type="checkbox"
                            checked={answers[q.id] === opt.id}
                            onChange={() => handleSelect(q.id, opt.id)}
                            className="w-5 h-5 mt-2"
                          />
                        </div>
                        <span>{opt.text}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button
                onClick={checkResults}
                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Υποβολή
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
