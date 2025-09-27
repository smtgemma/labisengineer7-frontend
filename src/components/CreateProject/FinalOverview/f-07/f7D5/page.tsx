

"use client"

import { useState } from "react";
import { format } from "date-fns"

import { useForm, Controller } from "react-hook-form"
import { FaRegEdit } from "react-icons/fa"
import { useGetMeQuery, useUpdateProjectMutation } from "@/redux/features/templates/allTemplateSlice";

interface FormData {
    projectDescription: string;
    propertyAddress: string;
    propertyPlace: string;
    propertyPostalCode: string;
    owners: {
        firstName: string;
        lastName: string;
    }[];
    engineers: {
        firstName: string;
        lastName: string;
    }[];
}


interface allDataProps {
    owners: any[];
    engineers: any[];
    projectDescription: string;
    propertyAddress: string;
    propertyPlace: string;
    propertyPostalCode: string;
    technicalDescription: string;
    technicalDescriptionTwo: string
    createdAt: string
    id: string
    createdById: string
    specialty: string
}

type F6D5Props = {
    allData: any;
    setIsModalOpen: (value: boolean) => void;
};



export default function F7D5({ allData, setIsModalOpen
    //  setIsModalOpen 
}: F6D5Props) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const owner = allData?.owners?.[0] || {}
    const engineers = allData?.engineers?.[0] || {}
    const allDescriptionTasks = allData?.allDescriptionTasks || {};
    const { id, createdById, serviceId, projectDescription, propertyPostalCode, propertyPlace, propertyAddress, createdAt, specialty } = allData || {};
    const descriptions = [
        {
            "id": 1,
            "description": "Technical Description 1 of the project"
        },
        {
            "id": 2,
            "description": "Technical Description 2 of the project"
        },
        {
            "id": 3,
            "description": "Technical Description 3 of the project"
        },
        {
            "id": 4,
            "description": "Technical Description 4 of the project"
        },
        {
            "id": 5,
            "description": "Technical Description 5 of the project"
        },
        {
            "id": 6,
            "description": "Technical Description 6 of the project"
        },
        {
            "id": 7,
            "description": "Technical Description 7 of the project"
        },
        {
            "id": 8,
            "description": "Technical Description 8 of the project"
        },
        {
            "id": 9,
            "description": "Technical Description 9 of the project"
        },
        {
            "id": 10,
            "description": "Technical Description 10 of the project"
        },
        {
            "id": 11,
            "description": "Technical Description 11 of the project"
        },
        {
            "id": 12,
            "description": "Technical Description 12 of the project"
        },
        {
            "id": 13,
            "description": "Technical Description 13 of the project"
        },
        {
            "id": 14,
            "description": "Technical Description 14 of the project"
        },
        {
            "id": 15,
            "description": "Technical Description 15 of the project"
        },
        {
            "id": 16,
            "description": "Technical Description 16 of the project"
        },
        {
            "id": 17,
            "description": "Technical Description 17 of the project"
        },
        {
            "id": 18,
            "description": "Technical Description 18 of the project"
        },
        {
            "id": 19,
            "description": "Technical Description 19 of the project"
        },
        {
            "id": 20,
            "description": "Technical Description 20 of the project"
        },
        {
            "id": 21,
            "description": "Technical Description 21 of the project"
        },
        {
            "id": 22,
            "description": "Technical Description 22 of the project"
        }
    ]
    const descriptions2 = [
        {
            "id": 1,
            "description": "Technical Description 1 of the project"
        },
        {
            "id": 2,
            "description": "Technical Description 2 of the project"
        },
        {
            "id": 3,
            "description": "Technical Description 3 of the project"
        },
        {
            "id": 4,
            "description": "Technical Description 4 of the project"
        },
        {
            "id": 5,
            "description": "Technical Description 5 of the project"
        },
        {
            "id": 6,
            "description": "Technical Description 6 of the project"
        },
        {
            "id": 7,
            "description": "Technical Description 7 of the project"
        },
        {
            "id": 8,
            "description": "Technical Description 8 of the project"
        },
        {
            "id": 9,
            "description": "Technical Description 9 of the project"
        },
        {
            "id": 10,
            "description": "Technical Description 10 of the project"
        },
        {
            "id": 11,
            "description": "Technical Description 11 of the project"
        },
        {
            "id": 12,
            "description": "Technical Description 12 of the project"
        },
        {
            "id": 13,
            "description": "Technical Description 13 of the project"
        },
    ]
    const [updateProject] = useUpdateProjectMutation()
    const { data: userData } = useGetMeQuery()
    const signature = userData?.data?.signature
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            projectDescription: allData?.projectDescription || "",
            propertyAddress: allData?.propertyAddress || "",
            propertyPlace: allData?.propertyPlace || "",
            propertyPostalCode: allData?.propertyPostalCode || "",
            owners: [
                {
                    firstName: allData?.owners?.[0]?.firstName || "",
                    lastName: allData?.owners?.[0]?.lastName || "",
                },
            ],
            engineers: [
                {
                    firstName: allData?.engineers?.[0]?.firstName || "",
                    lastName: allData?.engineers?.[0]?.lastName || "",
                },
            ],
        },
    })

    const onSubmit = async (data: FormData) => {
        console.log("Updated Data:", data)
        const addNewData = {
            serviceId: serviceId,
            ...data
        }
        const formData = new FormData()
        formData.append("data", JSON.stringify(addNewData))

        try {
            const responsive = await updateProject({ projectId: id, userId: createdById, formData }).unwrap()
            console.log(responsive)
        } catch (error) {
            console.log(error)
        }

        reset()
        setIsEditModalOpen(false)
        setIsModalOpen(false)
    }

    return (
        <div className="max-w-[794px] mx-auto p-4 bg-white space-y-8 arial">
            <div className="text-right -mt-6">
                <button
                    className="mt-1 px-4 py-1"
                    onClick={() => setIsEditModalOpen(true)}
                >
                    <FaRegEdit className="text-black text-2xl cursor-pointer" />
                </button>
            </div>
            {/* ΦΑΚΕΛΟΣ ΑΣΦΑΛΕΙΑΣ ΚΑΙ ΥΓΕΙΑΣ first stp=========================*/}
            <div className="border border-black">
                {/* Header */}
                <div className="text-center p-4">
                    <h1 className="text-xl font-bold mb-2">ΦΑΚΕΛΟΣ ΑΣΦΑΛΕΙΑΣ ΚΑΙ ΥΓΕΙΑΣ</h1>
                    <p className="text-xl font-bold">(Φ.Α.Υ.)</p>
                    <p className="text-lg font-bold">(Π.Δ. 305/96, άρθρο 3 - παρ. 3, 7, 8, 9, 10, 11)</p>
                </div>

                {/* Α. ΓΕΝΙΚΑ */}
                <div className="p-4 border-b border-black">
                    <h2 className="font-bold mb-4">Α. ΓΕΝΙΚΑ</h2>

                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="font-medium">ΕΡΓΟ :</span>
                            <span className="flex-1 text-sm">{projectDescription || "N/A"}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="font-medium">ΔΙΕΥΘΥΝΣΗ :</span>
                            <span className="">{propertyAddress || "N/A"}</span>
                            <span className="">, {propertyPlace || "N/A"}</span>
                            {/* <span className=" font-bold">, TOWN</span> */}
                            <span className="">, {propertyPostalCode || "N/A"}</span>
                            <span className="">FOR BUILDING</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="font-medium">ΙΔΙΟΚΤΗΤΗΣ :</span>
                            <span className="flex-1 ">{owner?.firstName || "N/A"} {owner?.lastName}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">ΥΠΟΧΡΕΟΣ ΓΙΑ ΤΗΝ ΕΚΠΟΝΗΣΗ ΤΟΥ Σ.Α.Υ. :</span>
                            <div className="flex flex-col items-center justify-center">
                                <span className="flex-1 ">{engineers?.firstName || "N/A"}, {engineers?.lastName || "N/A"}</span>
                                <span className="flex-1 ">{specialty || "N/A"}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Β. ΜΗΤΡΩΟ ΕΡΓΟΥ */}
                <div className="p-4">
                    <h2 className="font-bold mb-4">Β. ΜΗΤΡΩΟ ΕΡΓΟΥ</h2>

                    <div className="mb-4">
                        <h3 className="font-medium mb-2 underline">1. TECHNICAL DESCRIPTION OF PROJECT</h3>
                        <div className="mb-2">
                            {/* Mapping over the fetched data */}
                            {Array.isArray(allDescriptionTasks) &&
                                allDescriptionTasks.map((task: any, index: number) => (
                                    <div key={index}>
                                        <h3 className="text-sm font-bold">● {task?.id}</h3>
                                        <p className="text-sm">{task?.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-medium mb-2">3. ΣΧΕΔΙΑ</h3>
                        <p className="mb-2">Για την κατασκευή του κτιρίου χρειάστηκε να γίνουν οι παρακάτω μελέτες:</p>
                        <div className="space-y-1 text-sm">
                            <div className="">1. Αρχιτεκτονικά</div>
                            <div className="">2. Στατικά</div>
                            <div className="">3. Παθητική Πυροπροστασία</div>
                            <div className="">4. Θερμομόνωση</div>
                            <div className="">5. Ύδρευση</div>
                            <div className="">6. Αποχέτευση</div>
                            <div className="">7. Ηλεκτρικές Εγκαταστάσεις</div>
                            <div className="">8. Κλιματισμός</div>
                            <div className="">9. Μελέτη Ενεργειακής Απόδοσης</div>
                            <div className="">10. Τοπογραφικό</div>

                        </div>
                        <p className="mt-2 text-sm">
                            Θα προσαρτηθούν στο Φ.Α.Υ. με τη μορφή παραρτήματος τα "ως κατασκευάστηκε" σχέδια του έργου, μετά την
                            ολοκλήρωση της εκτέλεσής του.
                        </p>
                    </div>
                </div>

                {/* Γ. ΕΠΙΣΗΜΑΝΣΕΙΣ */}
                <div className="p-4">
                    <h2 className="font-bold mb-4">Γ. ΕΠΙΣΗΜΑΝΣΕΙΣ</h2>
                    <div className="space-y-2 text-sm">
                        <p>Δεν υπάρχουν ζώνες ιδιαίτερου κινδύνου στο εργοτάξιο της οικοδομής.</p>
                        <p>Δεν υπάρχουν ιδιαιτερότητες στη στατική δομή, ευστάθεια και αντοχή του έργου.</p>
                        <p>Θέσεις δικτύων κεντρικών παροχών και κεντρικών διακοπτών θα σημανθούν.</p>
                        <p>Θέσεις εξόδων κινδύνου και πυροσβεστικές φωλεές θα επισημανθούν.</p>
                    </div>

                    <div className="mt-4 text-sm">
                        <div className="grid grid-cols-4">
                            <p className="grid-cols-1">Οδοί διαφυγής:</p>
                            <p className="grid-cols-1">Δημοτική οδός</p>
                        </div>
                        <div className="grid grid-cols-4">
                            <p className="grid-cols-1">Έξοδοι κινδύνου:</p>
                            <p className="grid-cols-1">Εξωτερικός Χώρος</p>
                        </div>
                        <div className="grid grid-cols-4">
                            <p className="grid-cols-1">Ιδιαίτερες στατικές μελέτες:</p>
                            <p className="grid-cols-1">Όχι</p>
                        </div>
                        <div className="grid grid-cols-4">
                            <p className="grid-cols-1">Δίκτυα προστασίας:</p>
                            <p className="grid-cols-1">Όχι</p>
                        </div>
                        <div className="grid grid-cols-4">
                            <p className="grid-cols-1">Θέση υλικών:</p>
                            <p className="grid-cols-1">Εκτός Κτιρίου</p>
                        </div>
                        <div className="grid grid-cols-4">
                            <p className="grid-cols-1">Ζώνες κινδύνου:</p>
                            <p className="grid-cols-1">Οπές - Περίμετρος Κτιρίου</p>
                        </div>
                    </div>
                </div>

                {/* Δ. ΟΔΗΓΙΕΣ ΚΑΙ ΧΡΗΣΙΜΑ ΣΤΟΙΧΕΙΑ */}
                <div className="p-4">
                    <h2 className="font-bold mb-4">Δ. ΟΔΗΓΙΕΣ ΚΑΙ ΧΡΗΣΙΜΑ ΣΤΟΙΧΕΙΑ</h2>
                    <div className="space-y-2 text-sm">
                        <p>
                            Οι εργασίες συντήρησης και καθαρισμού των εξωτερικών τμημάτων της οικοδομής και τυχόν φωταγωγών που
                            απαιτούν τη χρήση ικριωμάτων θα γίνουν από εξειδικευμένα συνεργεία με λήψη των αναγκαίων μέτρων προστασίας
                            βάσει των ισχυουσών διατάξεων.
                        </p>
                        <p>
                            Η συντήρηση των δικτύων διανομής ηλεκτρικού ρεύματος θα γίνεται σε τακτά χρονικά διαστήματα μόνο από
                            εξειδικευμένους τεχνίτες, σύμφωνα με τις ισχύουσες διατάξεις.
                        </p>
                    </div>

                    <div className="mt-12 text-right">
                        <div className="flex justify-start items-start gap-30">
                            <div className="">
                                <h3 className="text-center mb-4">Ο ΣΥΝΤΑΞΑΣ</h3>
                                {/* Dashed Border Box = common component*/}
                                <div className="flex items-center justify-end p-4">
                                    <img src={signature} alt="" />
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <span className=" ">Ημερομηνία :</span>
                                <p>{createdAt
                                    ? format(new Date(createdAt), "dd/MM/yyyy")
                                    : "N/A"}</p>
                            </div>
                        </div>
                    </div>
                </div>



                {/* second step====================== */}
                {/* Header */}
                <div className="text-center p-4 mt-6">
                    <h1 className="text-xl font-bold mb-2">ΣΧΕΔΙΟ ΑΣΦΑΛΕΙΑΣ ΚΑΙ ΥΓΕΙΑΣ</h1>
                    <p className="text-xl font-bold">(Σ.Α.Υ.)</p>
                    <p className="text-lg font-bold">(Π.Δ. 305/96, άρθρο 3 - παρ. 3, 7, 8, 9, 10, 11)</p>
                </div>

                {/* Α. ΓΕΝΙΚΑ */}
                <div className="p-4 border-b border-black">
                    <h2 className="font-bold mb-4">Α. ΓΕΝΙΚΑ</h2>

                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="font-medium">ΕΡΓΟ :</span>
                            <span className="flex-1 text-sm">{projectDescription || "N/A"}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="font-medium">ΔΙΕΥΘΥΝΣΗ :</span>
                            <span className="">{propertyAddress || "N/A"}</span>
                            <span className="">, {propertyPlace || "N/A"}</span>
                            {/* <span className=" font-bold">, TOWN</span> */}
                            <span className="">, {propertyPostalCode || "N/A"}</span>
                            <span className="">FOR BUILDING</span>
                        </div>

                        <div className="flex justify-start gap-12">
                            <span className="font-medium">ΥΠΟΧΡΕΟΣ ΓΙΑ ΤΗΝ ΕΚΠΟΝΗΣΗ ΤΟΥ Σ.Α.Υ. :</span>
                            <div className="flex flex-col items-start justify-center">
                                <span className="flex-1 ">{engineers?.firstName || "N/A"}, {engineers?.lastName || "N/A"}</span>
                                <span className="flex-1">{specialty || "N/A"}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Β. ΜΗΤΡΩΟ ΕΡΓΟΥ */}
                <div className="p-4">
                    <div className="mb-4">
                        <h3 className="font-medium mb-2">PROJECT WORKS FOR TECHNICAL DESCRIPTION</h3>
                        <div className="mb-2">
                            {/* Mapping over the fetched data */}
                            {Array.isArray(allDescriptionTasks) &&
                                allDescriptionTasks.map((task: any, index: number) => (
                                    <div key={index}>
                                        <h3 className="text-sm font-bold">● {task?.id}</h3>
                                        <p className="text-sm">{task?.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>


                {/* Β. ΚΙΝΔΥΝΟΙ ΠΟΥ ΕΝΔΕΧΕΤΑΙ ΝΑ ΠΑΡΟΥΣΙΑΣΤΟΥΝ */}
                <div>
                    <div className="p-2 font-bold">
                        Β. ΚΙΝΔΥΝΟΙ ΠΟΥ ΕΝΔΕΧΕΤΑΙ ΝΑ ΠΑΡΟΥΣΙΑΣΤΟΥΝ
                    </div>

                    <div className="px-2 border-b border-black text-sm">
                        Η συγκεκριμένη κατασκευή δεν μπορεί να θεωρηθεί ιδιαίτερα επικίνδυνη κατά την εκτέλεση των διάφορων φάσεων
                        των έργων. Οι πιθανότεροι κίνδυνοι είναι:
                    </div>

                    <div className="border-b border-black">
                        <div className="grid grid-cols-12">
                            <div className="col-span-1 border-r border-black p-2 text-center font-bold">#REF!</div>
                            <div className="col-span-11 p-2 text-sm">
                                Πιθανός κίνδυνος πτώσεως εργαζομένων από ύψος στις εργασίες κατασκευής ξυλοτύπων, σκυροδέτησης,
                                τοποθέτησης σιδηροπλισμών, κατασκευής τοιχοδομών και επιχρισμάτων, χρωματισμών κτλ.
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-black">
                        <div className="grid grid-cols-12">
                            <div className="col-span-1 border-r border-black p-2 text-center font-bold">#REF!</div>
                            <div className="col-span-11 p-2 text-sm">Πιθανός κίνδυνος πτώσεως αντικειμένων και υλικών. </div>
                        </div>
                    </div>
                </div>

                {/* Γ. ΜΕΤΡΑ ΓΙΑ ΤΗΝ ΠΡΟΛΗΨΗ ΚΑΙ ΑΠΟΤΡΟΠΗ ΤΩΝ ΚΙΝΔΥΝΩΝ */}


                <div>
                    <div className="p-2 font-bold mt-20">
                        Γ. ΜΕΤΡΑ ΓΙΑ ΤΗΝ ΠΡΟΛΗΨΗ ΚΑΙ ΑΠΟΤΡΟΠΗ ΤΩΝ ΚΙΝΔΥΝΩΝ
                    </div>

                    <div className="border-y border-black">
                        <div className="grid grid-cols-12">
                            <div className="col-span-1 border-r border-black p-2 text-center font-bold">#REF!</div>
                            <div className="col-span-11 p-2 text-sm">
                                • Για να προλαμβάνονται οι πτώσεις εργαζομένων ή αντικειμένων πρέπει σε όλες τις εργασίες η κατασκευή των
                                ικριωμάτων πρέπει να είναι η σωστή και να πληρεί τις προδιαγραφές της κείμενης νομοθεσίας (ΠΔ 778/80 και
                                1073/81), να τοποθετούνται κιγκλιδώματα και κατάλληλες περιφράξεις στους διαδρόμους των ικριωμάτων, του
                                κτιρίου κλπ. στις σκάλες και φρεάτια ασανσέρ, στα πρανή των εκσκαφών και στις οπές του κτιρίου.
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-black">
                        <div className="grid grid-cols-12">
                            <div className="col-span-1 border-r border-black p-2 text-center font-bold">#REF!</div>
                            <div className="col-span-11 p-2 text-sm">
                                • Οι εργαζόμενοι πρέπει να φορούν τα προβλεπόμενα από τη νομοθεσία κράνη, να διαθέτουν την κατάλληλη
                                ένδυση και υπόδηση προς αποφυγή ολισθήσεων και ηλεκτροπληξιών. Σε ορισμένες εργασίες να διατίθενται ζώνες
                                ασφαλείας και να προσδένονται οι εργαζόμενοι.
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-black">
                        <div className="grid grid-cols-12">
                            <div className="col-span-1 border-r border-black p-2 text-center font-bold">#REF!</div>
                            <div className="col-span-11 p-2 text-sm">Ειδικοί κίνδυνοι του παραρτ. ΙΙΙ του ΠΔ 305/96 (πλην &1) δεν υπάρχουν. </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <h1 className="p-2 font-bold mt-20">
                        Δ. ΠΡΟΣΘΕΤΑ ΣΤΟΙΧΕΙΑ
                    </h1>

                    <div className="space-y-6 text-sm">
                        <ul className="p-2 space-y-4">
                            <li className="flex items-center gap-2">
                                <div>
                                    <p>1. Προσπέλαση στο εργοτάξιο, πρόσβαση στις θέσεις εργασίας:</p>
                                    <p className="ml-4">Δεν απαιτείται ιδιαίτερη μέριμνα πέραν των συνθηκών.</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <div>
                                    <p>2. Κυκλοφορία οχημάτων και πεζών εντός του εργοταξίου:</p>
                                    <p className="ml-4">Δεν απαιτείται ιδιαίτερη μέριμνα πέραν των συνθηκών.</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <div>
                                    <p>3. Χώροι αποθήκευσης υλικών και τρόπος αποκομιδής αχρήστων:</p>
                                    <p className="ml-4">Αποθήκευση στον ακάλυπτο χώρο της οικοδομής και αποκομιδή αχρήστων με μηχανικά μέσα.</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <div>
                                    <p>4. Διευθέτηση αποκομιδής επικίνδυνων υλικών:</p>
                                    <p className="ml-4">Συγκέντρωση επικίνδυνων υλικών για αποκομιδή και σωστή διάθεση.</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <div>
                                    <p>5. Χώροι υγιεινής, εστίασης και πρώτων βοηθειών:</p>
                                    <p className="ml-4">Θα δημιουργηθεί προχείρο W.C. και φραγμένο από το ισόγειο.</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <div>
                                    <p>6. Κατασκευή ικριωμάτων:</p>
                                    <p className="ml-4">Συνήθης μορφή ικριωμάτων χρησιμοποιώντας κανονιστικά πρότυπα.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-right ml-6">
                    <div className="flex justify-start items-start gap-30">
                        <div className="">
                            <h3 className="text-center mb-4">Ο ΣΥΝΤΑΞΑΣ</h3>
                            <div className="flex items-center justify-end p-4">
                                <img src={signature} alt="" />
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <span className=" ">Ημερομηνία :</span>
                            <p>{createdAt
                                ? format(new Date(createdAt), "dd/MM/yyyy")
                                : "N/A"}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* EDIT MODAL */}
            {isEditModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white p-6 rounded-xl shadow-lg w-11/12 max-w-3xl relative">
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-2 text-red-600 bg-gray-200 px-2 py-1 rounded-full hover:text-red-600 cursor-pointer"
                            onClick={() => setIsEditModalOpen(false)}
                        >
                            ✕
                        </button>

                        <h2 className="text-lg font-bold mb-4">✍️ Edit Data</h2>
                        <div>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="space-y-4 p-4 border rounded-lg bg-white shadow-md"
                            >
                                {/* Project */}
                                <div className="flex items-center gap-4">
                                    <label className="font-medium w-1/4">Έργο *:</label>
                                    <input
                                        defaultValue={projectDescription || "Project Description "}
                                        type="text"
                                        {...register("projectDescription", { required: "This field is required" })}
                                        className="flex-1 border p-2 rounded text-sm"
                                    />
                                </div>

                                {/* Address */}
                                <div className="flex items-center gap-4">
                                    <label className="font-medium w-1/4">Θέση*:</label>
                                    <div className="flex-1 grid grid-cols-3 gap-2">
                                        <input
                                            type="text"
                                            defaultValue={propertyAddress || "propertyAddress"}
                                            {...register("propertyPlace", { required: "Address is required" })}
                                            className="border p-2 rounded text-sm"
                                        />
                                        <input
                                            type="text"
                                            defaultValue={propertyPlace || "propertyNumber"}
                                            {...register("propertyPlace", { required: "City is required" })}
                                            className="border p-2 rounded text-sm"
                                        />
                                        <input
                                            type="text"
                                            defaultValue={propertyPostalCode || "municipalityCommunity"}
                                            {...register("propertyPostalCode", { required: "Postal code is required" })}
                                            className="border p-2 rounded text-sm"
                                        />
                                    </div>
                                </div>
                                {/* Address */}
                                {/* First Name */}
                                <Controller
                                    name="owners.0.firstName"
                                    control={control}
                                    rules={{ required: "First name is required" }}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            placeholder="First Name"
                                            className="border p-2 rounded text-sm w-full"
                                        />
                                    )}
                                />

                                {/* Last Name */}
                                <Controller
                                    name="engineers.0.firstName"
                                    control={control}
                                    rules={{ required: "Last name is required" }}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            placeholder="Last Name"
                                            className="border p-2 rounded text-sm w-full"
                                        />
                                    )}
                                />
                                {/* Last Name */}
                                <Controller
                                    name="engineers.0.lastName"
                                    control={control}
                                    rules={{ required: "Last name is required" }}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            placeholder="Last Name"
                                            className="border p-2 rounded text-sm w-full"
                                        />
                                    )}
                                />

                                {/* Submit */}
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm cursor-pointer"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
