

type questionProps = {
    question: string;
    answer: string;
};

function QuestionAnswer({ question, allData }: { question: questionProps[], allData: any }) {
    const { technicalDescriptionSix, technicalDescriptionSeven, technicalDescriptionEight, technicalDescriptionNine
    } = allData || {}
    return (
        <div>
            {/* question answer  */}
            <div className=" space-y-2">
                {question.map((item: { answer: string; question: string }) => {
                    //    question ---1 
                    {/* If on Question (1) the user selected a) add this text */ }
                    if (item.answer === "a" && Number(item.question) === 1) {
                        return <div>
                            <p>
                                <span className="ml-[28px]">Βάσει της παραγράφου 5 του άρθρου 98 του ν. 4495/2017, όπως τροποποιήθηκε από το ν.4759/2020, είναι δυνατή η υπαγωγή</span> των άνω αυθαιρεσιών επί κοινοχρήστων στο νόμο αυτό, χωρίς τη συναίνεση των λοιπών συνιδιοκτητών καθώς η υπέρβαση δόμησης υφίσταται από την ανέγερση-κατασκευή
                                της οικοδομής ΚΑΙ είναι μέσα στο νόμιμο όγκο του κτιρίου.
                            </p>
                        </div>
                    }
                    {/* If on Question (1) the user selected b) add this text */ }
                    if (item.answer === "b" && Number(item.question) === 1) {
                        return <div>
                            <p
                                className="text-sm"
                                style={{ textIndent: "2em", whiteSpace: "pre-line" }}
                            >
                                {technicalDescriptionSix || "N/A"}
                            </p>
                        </div>
                    }
                    {/* If on Question (1) the user selected c) add this text */ }
                    if (item.answer === "c" && Number(item.question) === 1) {
                        return <div>
                            <p
                                className="text-sm"
                                style={{ textIndent: "2em", whiteSpace: "pre-line" }}
                            >
                                {technicalDescriptionSeven || "N/A"}
                            </p>
                        </div>
                    }
                    {/* If on Question (1) the user selected d) add this text */ }
                    if (item.answer === "d" && Number(item.question) === 1) {
                        return null
                    }


                    {/* If on Question (2) the user selected a) add this text */ }
                    if (item.answer === "a" && Number(item.question) === 2) {
                        return <div>
                            <p>
                                <span className="ml-[28px]">Σύμφωνα με την παράγραφο 1.α του άρθρου 16 του Ν.5142/2024 ο παραπάνω ιδιοκτήτης μπορεί να προβεί σε μονομερώς συμβολαιογραφική</span> πράξη τροποποίησης της οριζόντιας ιδιοκτησίας του. Η επιφάνεια, το περίγραμμα και η χρήση της οριζόντιας ιδιοκτησίας είναι ταυτόσημη με την υπαγωγή στις διατάξεις του Ν. 4495/2017 και την πραγματική κατάσταση, έχει αποτυπωθεί στην Ηλεκτρονική ταυτότητα, δε θίγονται κοινόχρηστοι χώροι και
                                δε θίγονται υφιστάμενα συνολικά ποσοστά συνιδιοκτησίας της οριζόντιας ιδιοκτησίας επί του γεωτεμαχίου και κατανομής κοινοχρήστων δαπανών.
                            </p>
                        </div>
                    }
                    {/* If on Question (2) the user selected b) add this text */ }
                    if (item.answer === "b" && Number(item.question) === 2) {
                        return <div>
                            <p
                                className="text-sm"
                                style={{ textIndent: "2em", whiteSpace: "pre-line" }}
                            >
                                {technicalDescriptionSeven || "N/A"}
                            </p>
                        </div>
                    }
                    {/* If on Question (2) the user selected c) add this text */ }
                    if (item.answer === "c" && Number(item.question) === 2) {
                        return <div>
                            <p
                                className="text-sm"
                                style={{ textIndent: "2em", whiteSpace: "pre-line" }}
                            >
                                {technicalDescriptionSix || "N/A"}
                            </p>
                        </div>
                    }
                    {/* If on Question (2) the user selected d) add this text */ }
                    if (item.answer === "d" && Number(item.question) === 2) {
                        return null
                    }

                    {/* If on Question (3) the user selected a) add this text */ }
                    if (item.answer === "a" && Number(item.question) === 3) {
                        return <div>
                            <p
                                className="text-sm"
                                style={{ textIndent: "2em", whiteSpace: "pre-line" }}
                            >
                                {technicalDescriptionEight || "N/A"}
                            </p>
                        </div>
                    }
                    {/* If on Question (3) the user selected b) add this text */ }
                    if (item.answer === "b" && Number(item.question) === 3) {
                        return <div>
                            <p
                                className="text-sm"
                                style={{ textIndent: "2em", whiteSpace: "pre-line" }}
                            >
                                {technicalDescriptionSeven || "N/A"}
                            </p>
                        </div>
                    }
                    {/* If on Question (3) the user selected c) add this text */ }
                    if (item.answer === "c" && Number(item.question) === 3) {
                        return <div>
                            <p
                                className="text-sm"
                                style={{ textIndent: "2em", whiteSpace: "pre-line" }}
                            >
                                {technicalDescriptionSix || "N/A"}
                            </p>
                        </div>
                    }
                    {/* If on Question (3) the user selected d) add this text */ }
                    if (item.answer === "d" && Number(item.question) === 3) {
                        return null
                    }
                    return null; // return null if nothing matches
                })}

                {/* // this is technical decription */}
                <p
                    className="text-sm"
                    style={{ textIndent: "2em", whiteSpace: "pre-line" }}
                >
                    {technicalDescriptionNine || "N/A"}
                </p>

                {question.map((item: { answer: string; question: string }) => {

                    {/* If on Question (4) the user selected a) add this text */ }
                    if (item.answer === "a" && Number(item.question) === 4) {
                        return <div>
                            <p>
                                <span className="ml-[28px]">Οι ανωτέρω αυθαίρετες κατασκευές εμπίπτουν στις περιπτώσεις και τις διατάξεις των άρθρων 1 και 2 της</span> απόφασης ΥΠΕΝ/ΔΑΟΚΑ/19409/1507(ΦΕΚ 1643 Β΄/11-5-2018), και ως εκ τούτου δεν
                                απαιτείται μελέτη στατικής επάρκειας και αντ’ αυτής υποβάλλεται τεχνική έκθεση στατικού ελέγχου.
                            </p>
                        </div>
                    }
                    {/* If on Question (4) the user selected b) add this text */ }
                    if (item.answer === "b" && Number(item.question) === 4) {
                        return <div>
                            <p>
                                <span className="ml-[28px]">Από τις ανωτέρω αυθαίρετες κατασκευές, υπάρχουν περιπτώσεις που εμπίπτουν στις διατάξεις</span> του άρθρου 1 της υπ’ αριθμ. ΥΠΕΝ/ΔΑΟΚΑ/19409/1507 (ΦΕΚ 1643/Β’/11-5-2018), περί υποχρέωσης εκπόνησης μελέτης
                                στατικής επάρκειας· η οποία έχει εκπονηθεί και υποβληθεί στο πληροφοριακό σύστημα του ΤΕΕ.»
                            </p>
                        </div>
                    }

                    return null; // return null if nothing matches
                })}
            </div>
        </div>
    )
}

export default QuestionAnswer;