"use client"
// import StampComponent from "@/component/shared/dashed/Dashed"

export default function FileOneDesingSix() {

    return (
        <div className="max-w-[794px] mx-auto p-6 bg-white">
            {/* Title */}
            <h2 className="text-center font-semibold underline text-sm mb-2">
                ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ - ΒΕΒΑΙΩΣΗ ΜΗΧΑΝΙΚΟΥ
            </h2>

            {/* Project Information */}
            <div className="mb-8 space-y-4">
                <div className="flex items-start justify-between max-w-[450px]">
                    <span className=" min-w-[80px] text-sm">Έργο:</span>
                    <h3 className=" text-sm">PROJECT DESCRIPTION</h3>
                </div>

                <div className="flex items-start justify-between gap-4 max-w-xl">
                    <span className=" text-sm">Θέση:</span>
                    <h3 className=" text-sm">ADDRESS, TOWN/AREA , POSTAL CODE ( FOR BUILDING)</h3>
                </div>

                <div className="flex items-start justify-between max-w-[400px] ml-[40px] text-sm">
                    <span className="">Ιδιοκτήτης:</span>
                    <h3 className=" text-sm">OWNER/OWNERS</h3>
                </div>
            </div>

            {/* Main Description */}
            <div className="text-sm mb-4 ml-10">
                <p>Στο ακίνητο <span className="font-semibold">Description for building/ horiontal property</span> επί της οδού <br /> <span className="font-semibold">Address,Town/Area , postal code ( FOR BUILDING),</span>
                    πρόκειται να <br /> εκτελεσθούν οι παρακάτω εργασίες :</p>
            </div>

            {/* one  */}
            <div className="space-y-6 ml-10">
                <div>
                    <h1 className="text-xl font-semibold">●Τοποθέτηση ικριωμάτων επί των όψεων του κτιρίου</h1>
                    <p className="text-sm mb-6">
                       Περιλαμβάνεται η εγκατάσταση μεταλλικών ικριωμάτων κατά μήκος των όψεων του κτιρίου, σύμφωνα με την ισχύουσα νομοθεσία περί μέτρων ασφαλείας. Η τοποθέτηση διασφαλίζει ασφαλή και πλήρη πρόσβαση στα σημεία επέμβασης για τις εργασίες αποκατάστασης και χρωματισμού των εξωτερικών επιφανειών.
                    </p>
                    
            </div>
            
            {/* {/* Signature Section */}
            <div className="mt-6 text-right flex items-center justify-center p-5">
                <div className="max-w-[300px]">

                    <div className="text-center">
                        <p>Ημερομηνία :</p>
                        <p>25/06/2025</p>
                    </div>
                    <div className="">
                        <h3 className="text-center mb-4">Ο ΣΥΝΤΑΞΑΣ</h3>
                        {/* Dashed Border Box = common component*/}
                        {/* <StampComponent
                            title="ΣΦΡΑΓΙΔΑ ΜΗΧΑΝΙΚΟΥ"
                            instructions={[
                                "Με δεξί κλικ",
                                "Αλλαγή εικόνας",
                                " Βάζετε την σφραγίδα σας",
                            ]}
                        /> */}
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}



