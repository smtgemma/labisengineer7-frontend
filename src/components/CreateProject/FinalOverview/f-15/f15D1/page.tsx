import StampComponent from "../../shared/signture/signture"


function F15D1() {
    return (
        <div className='max-w-[632px] mx-auto'>
            {/* Title */}
            <h2 className="text-center font-semibold text-xl mb-6 underline">
                ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ - ΒΕΒΑΙΩΣΗ ΜΗΧΑΝΙΚΟΥ
            </h2>

            {/* Project Row */}
            <div className="grid grid-cols-12 gap-2">
                <label className="col-span-2 font-medium">Έργο:</label>
                <div className="col-span-10">
                    PROJECT DESCRIPTION
                </div>
            </div>

            {/* Address Row */}
            <div className="grid grid-cols-12 gap-2 mb-4 mt-20">
                <label className="col-span-2 font-medium">Θέση:</label>
                <div className="col-span-10">
                    ADDRESS, TOWN/AREA , POSTAL CODE (FOR BUILDING)
                </div>
            </div>

            <div className='lg:ml-12'>
                {/* Owner Row */}
                <div className="grid grid-cols-12 gap-2">
                    <label className="col-span-2 font-medium">Ιδιοκτήτης:</label>
                    <div className="col-span-10">
                        OWNER / OWNERS
                    </div>
                </div>

                {/* Greek Description */}
                <p className="my-10">
                    Στο ακίνητο <span className="text-sm font-semibold">Description for building/horizontal property</span>
                    επί της οδού <br /> <span className="text-lg font-semibold">Address, Town/Area, postal code (FOR BUILDING)</span>,
                    πρόκειται να εκτελεσθούν οι παρακάτω εργασίες :
                </p>

                {/* Bullet Point */}
                <div className="mt-4">
                    <p className="font-semibold text-lg mb-2">
                        ● Τοποθέτηση ικριωμάτων επί των όψεων του κτιρίου
                    </p>
                    <p className="text-sm leading-relaxed">
                        Περιλαμβάνεται η εγκατάσταση μεταλλικών ικριωμάτων κατά μήκος των
                        όψεων του κτιρίου, σύμφωνα με την ισχύουσα νομοθεσία περί μέτρων
                        ασφαλείας. Η τοποθέτηση διασφαλίζει ασφαλή και πλήρη πρόσβαση στα
                        σημεία επέμβασης για τις εργασίες αποκατάστασης και χρωματισμού των
                        εξωτερικών επιφανειών.
                    </p>
                </div>
            </div>
            <div className="mt-20 flex items-center justify-center">
                <div>
                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <h2 className="text-xl mb-2">
                            Ημερομηνία
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            6/25/2025
                        </p>

                        <h3 className="text-lg font-medium text-gray-700 mb-4">
                            Ο ΜΗΧΑΝΙΚΟΣ
                        </h3>
                    </div>

                    {/* Dashed Border Box = common component*/}
                    <StampComponent
                        title="ΣΦΡΑΓΙΔΑ ΜΗΧΑΝΙΚΟΥ"
                        instructions={[
                            "Με δεξί κλικ",
                            "Αλλαγή εικόνας",
                            " Βάζετε την σφραγίδα σας",
                        ]}
                    />

                </div>
            </div>
        </div>
    )
}

export default F15D1