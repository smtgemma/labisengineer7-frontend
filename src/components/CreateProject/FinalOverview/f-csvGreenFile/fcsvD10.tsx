import React from 'react'

function FcsvD10() {
    return (
        <div>
            {/* first design  */}
            <div className='flex border text-sm'>
                <p className='text-right bg-[#33CCCC] border-r py-2 px-1 flex-1'>Επωνυμία Διαχειριστή:</p>
                <p className='text-left flex-1 py-2 px-1'>SURNAME AND NAME ENGINEER</p>
            </div>
            <div className='flex border border-t-0 text-sm'>
                <p className='text-right bg-[#33CCCC] border-r py-2 px-1 flex-1'>Τίτλος Έργου:</p>
                <p className='text-left flex-1 py-2 px-1'>PROJECT DISCRIPSION</p>
            </div>
            <div className='flex border border-t-0 text-sm'>
                <p className='text-right bg-[#33CCCC] border-r py-2 px-1 flex-1'>Φάση Έργου: </p>
                <p className='text-left flex-1 py-2 px-1'>8</p>
            </div>
            {/* header design  */}
            <div className='text-center py-2 bg-[#32CCCC] border border-b-0 text-sm font-semibold mt-8'>
                <p>2. ΕΚΤΙΜΩΜΕΝΗ ΠΟΣΟΤΗΤΑ ΑΕΚΚ </p>
            </div>
            <div className="grid grid-cols-12 border border-black font-bold text-[11px] bg-[#33CCCC]">
                <div className="col-span-1 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                    (1) Κωδικός ΕΚΑ
                </div>
                <div className="col-span-5 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                    (2) Περιγραφή Κωδικού ΕΚΑ
                </div>
                <div className="col-span-2 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                    (3) Εκτίμηση παραγόμενης ποσότητας (σε τόνους)
                </div>
                <div className="col-span-1 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                    (4) Εκτίμηση Επαναχρησιμοποιούμενης ποσότητας (σε τόνους)
                </div>
                <div className="col-span-1 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                    (5) Εκτίμηση Ανάκτώμενης Ποσότητας (σε τόνους)
                </div>
                <div className="col-span-2 p-2 flex items-center justify-center text-center break-words overflow-hidden">
                    (6) Εκτίμηση Ποσότητας προς Τελική Διάθεση (σε τόνους)
                </div>
            </div>
            {/* center line 1 box  */}
            <div className='bg-[#CCFFCC] border-b'>
                <h3 className='py-2 text-center text-sm font-semibold'>17 01 ΣΚΥΡΟΔΕΜΑ, ΤΟΥΒΛΑ, ΠΛΑΚΑΚΙΑ ΚΑΙ ΚΕΡΑΜΙΚΑ</h3>
            </div>
            {/* fist table design  */}
            <div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 01 01
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        σκυρόδεμα
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        EE
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 01 02
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        τούβλα
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 01 03
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        πλακάκια και κεραμικά
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r bg-[#C0C0C0] border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 01 06*
                    </div>
                    <div className="col-span-5 border-r bg-[#C0C0C0] border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        μείγματα ή επιμέρους συστατικά από σκυρόδεμα, τούβλα, πλακάκια και κεραμικά που περιέχουν επικίνδυνες ουσίες
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 01 07
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        μείγμα σκυροδέματος, τούβλων, πλακακίων και κεραμικών εκτός εκείνων που περιλαμβάνονται στο σημείο 17 01 06
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                        ΥΠΟΣΥΝΟΛΟ
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                </div>
            </div>
            {/* center line 2 box  */}
            <div className='bg-[#CCFFCC] border-b'>
                <h3 className='py-2 text-center text-sm font-semibold'>17 02 ΞΥΛΟ, ΓΥΑΛΙ ΚΑΙ ΠΛΑΣΤΙΚΟ</h3>
            </div>
            {/* second table design  */}
            <div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 01 01
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        ξύλο
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 01 02
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        γυαλί
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 01 03
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        πλαστικό
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 01 07
                    </div>
                    <div className="col-span-5 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        μείγμα σκυροδέματος, τούβλων, πλακακίων και κεραμικών εκτός εκείνων που περιλαμβάνονται στο σημείο 17 01 06
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                        ΥΠΟΣΥΝΟΛΟ
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                </div>
            </div>
            {/* center line 2 box  */}
            <div className='bg-[#CCFFCC] border-b'>
                <h3 className='py-2 text-center text-sm font-semibold'>17 03 ΜΕΙΓΜΑΤΑ ΑΣΦΑΛΤΟΥ ΚΑΙ ΟΡΥΚΤΗΣ ΠΙΣΣΑΣ, ΛΙΘΑΝΘΡΑΚΟΠΙΣΣΑ ΚΑΙ ΠΡΟΪΌΝΤΑ ΠΙΣΣΑΣ</h3>
            </div>
            {/* third table design  */}
            <div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r bg-[#C0C0C0] border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 03 01*
                    </div>
                    <div className="col-span-5 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        μείγματα ορυκτής ασφάλτου που περιέχουν λιθανθρακόπισσα
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 01 02
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        μείγματα ορυκτής ασφάλτου εκτός εκείνων που περιλαμβάνονται στο σημείο 17 03 01
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 03 03*
                    </div>
                    <div className="col-span-5 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        λιθανθρακόπισσα και προϊόντα πίσσας
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                        ΥΠΟΣΥΝΟΛΟ
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                </div>
            </div>
            {/* center line 2 box  */}
            <div className='bg-[#CCFFCC] border-b'>
                <h3 className='py-2 text-center text-sm font-semibold'>17 04 ΜΕΤΑΛΛΑ (ΠΕΡΙΛΑΜΒΑΝΟΜΕΝΩΝ ΚΑΙ ΤΩΝ ΚΡΑΜΑΤΩΝ ΤΟΥΣ)</h3>
            </div>
            {/* fourth table design  */}
            <div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 04 01
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        χαλκός, μπορύντζος, ορείχαλκος
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 01 02
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        αλουμίνιο
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 03 03
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        μόλυβδος
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 03 04
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        ψευδάργυρος
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 03 05
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        σίδηρος και χάλυβας
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 03 06
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        κασσίτερος
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 03 07
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        ανάμεικτα μέταλλα
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 03 09*
                    </div>
                    <div className="col-span-5 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        απόβλητα μετάλλων μολυσμένα από επικίνδυνες ουσίες
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black  bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 03 10*
                    </div>
                    <div className="col-span-5 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        καλώδια που περιέχουν πετρέλαιο, λιθανθρακόπισσα και άλλες επικίνδυνες ουσίες
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 03 11
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        καλώδια εκτός εκείνων που περιλαμβάνονται στο σημείο 17 04 10
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                        ΥΠΟΣΥΝΟΛΟ
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                </div>
            </div>
            {/* center line 2 box  */}
            <div className='bg-[#CCFFCC] border-b'>
                <h3 className='py-2 text-center text-sm font-semibold'>17 05 ΧΩΜΑΤΑ (ΠΕΡΙΛΑΜΒΑΝΟΜΕΝΩΝ ΧΩΜΑΤΩΝ ΕΚΣΚΑΦΗΣ ΑΠΌ ΜΟΛΥΣΜΕΝΕΣ ΤΟΠΟΘΕΣΙΕΣ), ΠΕΤΡΕΣ ΚΑΙ ΜΠΑΖΑ ΕΚΣΚΑΦΩΝ</h3>
            </div>
            {/* six table design  */}
            <div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black  bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 05 03*
                    </div>
                    <div className="col-span-5 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        χώματα και πέτρες που περιέχουν επικίνδυνες ουσίες
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 05 04
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        χώματα και πέτρες άλλα από τα αναφερόμενα στο σημείο 17 05 03
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 05 05*
                    </div>
                    <div className="col-span-5 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        μπάζα εκσκαφών που περιέχουν επικίνδυνες ουσίες
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 03 06
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        μπάζα εκσκαφών άλλα από τα αναφερόμενα στο σημείο 17 05 05
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 05 07*
                    </div>
                    <div className="col-span-5 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        έρμα σιδηροτροχιών που περιέχει επικίνδυνες ουσίες
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 03 08
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        έρμα σιδηροτροχιών εκτός εκείνου που περιλαμβάνεται στο σημείο 17 05 07
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                        ΥΠΟΣΥΝΟΛΟ
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                </div>
            </div>
            {/* second design  */}
            <div className='flex border text-sm mt-8'>
                <p className='text-right bg-[#33CCCC] border-r py-2 px-1 flex-1'>Επωνυμία Διαχειριστή:</p>
                <p className='text-left flex-1 py-2 px-1'>SURNAME AND NAME ENGINEER</p>
            </div>
            <div className='flex border border-t-0 text-sm'>
                <p className='text-right bg-[#33CCCC] border-r py-2 px-1 flex-1'>Τίτλος Έργου:</p>
                <p className='text-left flex-1 py-2 px-1'>PROJECT DISCRIPSION</p>
            </div>
            <div className='flex border border-t-0 text-sm mb-8'>
                <p className='text-right bg-[#33CCCC] border-r py-2 px-1 flex-1'>Φάση Έργου: </p>
                <p className='text-left flex-1 py-2 px-1'>1.</p>
            </div>
            {/* header design  */}
            <div className='text-center py-2 bg-[#32CCCC] border border-b-0 text-sm font-semibold mt-8'>
                <p>2. ΕΚΤΙΜΩΜΕΝΗ ΠΟΣΟΤΗΤΑ ΑΕΚΚ </p>
            </div>
            <div className="grid grid-cols-12 border border-b-0 border-black font-bold text-[11px] bg-[#33CCCC]">
                <div className="col-span-1 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                    (1) Κωδικός ΕΚΑ
                </div>
                <div className="col-span-5 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                    (2) Περιγραφή Κωδικού ΕΚΑ
                </div>
                <div className="col-span-2 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                    (3) Εκτίμηση παραγόμενης ποσότητας (σε τόνους)
                </div>
                <div className="col-span-1 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                    (4) Εκτίμηση Επαναχρησιμοποιούμενης ποσότητας (σε τόνους)
                </div>
                <div className="col-span-1 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                    (5) Εκτίμηση Ανάκτώμενης Ποσότητας (σε τόνους)
                </div>
                <div className="col-span-2 p-2 flex items-center justify-center text-center break-words overflow-hidden">
                    (6) Εκτίμηση Ποσότητας προς Τελική Διάθεση (σε τόνους)
                </div>
            </div>
            {/* center line 2 box  */}
            <div className='bg-[#CCFFCC] border'>
                <h3 className='py-2 text-center text-sm font-semibold'>17 06 ΜΟΝΩΤΙΚΑ ΥΛΙΚΑ ΚΑΙ ΥΛΙΚΑ ΔΟΜΙΚΩΝ ΚΑΤΑΣΚΕΥΩΝ ΠΟΥ ΠΕΡΙΕΧΟΥΝ ΑΜΙΑΝΤΟ</h3>
            </div>
            {/* seven table design  */}
            <div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 06 01*
                    </div>
                    <div className="col-span-5 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        μονωτικά υλικά που περιέχουν αμίαντο
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 06 03*
                    </div>
                    <div className="col-span-5 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        άλλα μονωτικά υλικά που αποτελούνται από επικίνδυνες ουσίες ή τις περιέχουν
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 03 04
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        μονωντικά υλικά εκτός εκείνων που περιλαμβάνοτναι στα σημεία 17 06 01 και 17 06 03
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 06 05*
                    </div>
                    <div className="col-span-5 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        υλικά δομικών κατασκευών που περιέχουν αμίαντο
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                        ΥΠΟΣΥΝΟΛΟ
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                </div>
            </div>
            {/* center line 2 box  */}
            <div className='bg-[#CCFFCC] border-b'>
                <h3 className='py-2 text-center text-sm font-semibold'>17 08 ΥΛΙΚΑ ΔΟΜΙΚΩΝ ΚΑΤΑΣΚΕΥΩΝ ΜΕ ΒΑΣΗ ΤΟ ΓΥΨΟ</h3>
            </div>
            {/* eight table design  */}
            <div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 08 01*
                    </div>
                    <div className="col-span-5 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        υλικά δομικών κατασκευών με βάση το γύψο μολυσμένα από επικίνδυνες ουσίες
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 08 02
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        υλικά δμικών κατασκευών με βάση το γύψο εκτός εκείνων που περιλαμβάνονται στο σημείο 17 08 01
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                        ΥΠΟΣΥΝΟΛΟ
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                </div>
            </div>
            {/* center line 2 box  */}
            <div className='bg-[#CCFFCC] border-b'>
                <h3 className='py-2 text-center text-sm font-semibold'>17 09 ΑΛΛΑ ΑΠΟΒΛΗΤΑ ΔΟΜΙΚΩΝ ΚΑΤΑΣΚΕΥΩΝ ΚΑΙ ΚΑΤΕΔΑΦΙΣΕΩΝ</h3>
            </div>
            {/* eight table design  */}
            <div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 09 01*
                    </div>
                    <div className="col-span-5 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        απόβλητα δομικών κατασκευών και κατεδαφίσεων που περιέχουν υδράργυρο
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 09 02*
                    </div>
                    <div className="col-span-5 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        απόβλητα δομικών κατασκευών και κατεδαφίσεων που περιέχουν PCB (π.χ. στεγανωτικά υλικά που περιέχουν PCB, δάπεδα με βάση ρητίνες που περιέχουν PCB, μονάδες στεγανοποιημένης υαλόφραξης που περιέχουν PCB, πυκνωτές που περιέχουν PCB)
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 09 03*
                    </div>
                    <div className="col-span-5 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        άλλα απόβλητα δομικών κατασεκυών και κατεδαφίσεων (περιλαμβανομένων μειγμάτων αποβλήτων) που περιέχουν επικίνδυνες ουσίες)
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 09 03*
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        μείγματα αποβλήτων δοκιμών κατασκρυών και κατεδαφίσεων εκτός εκείνων που περιλαμβάνοτναι στα σημεία 17 09 01, 17 09 02 και 17 09 03.
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                        ΥΠΟΣΥΝΟΛΟ
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                </div>
            </div>
            {/* center line 2 box  */}
            <div className='bg-[#CCFFCC] border-b'>
                <h3 className='py-2 text-center text-sm font-semibold'>ΛΟΙΠΕΣ ΚΑΤΗΓΟΡΙΕΣ ΠΑΡΑΓΟΜΕΝΩΝ ΑΠΟΒΛΗΤΩΝ  </h3>
            </div>
            {/* nine emty table design  */}
            <div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div
                    className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                        ΥΠΟΣΥΝΟΛΟ
                    </div>
                    <div className="col-span-2 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                    </div>
                </div>
                <div className="grid grid-cols-12 border border-t-0 border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-1 border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                        ΣΥΝΟΛΟ
                    </div>
                    <div className="col-span-2 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                </div>
            </div>
            {/* text table and also last table */}
            <div className='py-24'>
                <h3 className='text-sm font-semibold'>ΕΠΕΞΗΓΗΣΕΙΣ</h3>
                <div className="border-2 border-black w-full text-[12px]">
                    {/* first */}
                    <div className="flex w-full items-stretch border-b">
                        {/* Left column */}
                        <div className="w-[15%] border-r border-black flex items-center justify-center p-2 text-center font-semibold">
                            <p>Στήλες (1)+(2)</p>
                        </div>

                        {/* Right column */}
                        <div className="w-[85%] p-3 text-justify leading-relaxed">
                            <p>
                                Στις στήλες (1) και (2) συμπληρώνονται συγκεντρωτικά οι κωδικοί ΕΚΑ και
                                οι αντίστοιχες περιγραφές τους για τις <span className='font-bold'>"Λοιπές κατηγορίες παραγόμενων
                                    αποβλήτων"</span> που δεν ανήκουν στην κατηγορία 17 του ΕΚΑ, όπως αυτοί έχουν
                                συμπληρωθεί στα επιμέρους φύλλα που αφορούν τις φάσεις του έργου.
                                Ενδεικτικά αναφέρονται:
                            </p>
                        </div>
                    </div>
                    {/* second */}
                    <div className="flex w-full items-stretch border-b">
                        {/* Left column */}
                        <div className="w-[15%] border-r border-black flex justify-center p-2 text-center font-semibold">
                            <p>Συσκευασίες </p>
                        </div>

                        {/* Right column */}
                        <div className="w-[85%] p-3 text-justify leading-relaxed">
                            <div>
                                <p>15 01 01 συσκευασία από χαρτί και χαρτόνι</p>
                                <p>15 01 02 πλαστική συσκευασία</p>
                                <p>15 01 03 ξύλινη συσκευασία</p>
                                <p>15 01 04 μεταλλική συσκευασία</p>
                                <p>15 01 05 συνθετική συσκευασία</p>
                                <p>15 01 06 μεικτή συσκευασία</p>
                                <p>15 01 09 συσκευασία από υφαντουργικές ύλες</p>
                            </div>
                        </div>
                    </div>
                    {/* third */}
                    <div className="flex w-full items-stretch border-b">
                        {/* Left column */}
                        <div className="w-[15%] border-r border-black flex justify-center p-2 text-center font-semibold">
                            <p>Επικίνδυνα πλην της κατηγορίας 17 </p>
                        </div>

                        {/* Right column */}
                        <div className="w-[85%] p-3 text-justify leading-relaxed">
                            <div>
                                <p>08 01 13* λάσπες από χρώματα ή βερνίκια που περιέχουν οργανικούς διαλύτες ή άλλες επικίνδυνες ουσίες</p>
                                <p>13 01 12* άμεσα βιοαποικοδομήσιμα υδραυλικά έλαια </p>
                                <p>13 01 13* άλλα υδραυλικά έλαια </p>
                                <p>13 05 01* στερεά υλικά από θαλάμους υπολειμμάτων και στερεά υλικά διαχωριστή ελαίου/νερού </p>
                                <p>13 05 03* λάσπες υποδοχέα </p>
                                <p>13 05 06* έλαια από διαχωριστές ελαίου/νερού </p>
                                <p>13 07 01* καύσιμο πετρέλαιο και πετρέλαιο ντίζελ</p>
                                <p>14 06 01* χλωροφθοράνθρακες, HCFC, HFC </p>
                                <p>14 06 02* άλλοι αλογονωμένοι διαλύτες και μείγματα διαλυτών </p>
                                <p>14 06 03* άλλοι διαλύτες και μείγματα διαλυτών </p>
                                <p>14 06 04* λάσπες ή στερεά απόβλητα που περιέχουν αλογονωμένους διαλύτες </p>
                                <p>14 06 05* λάσπες ή στερεά απόβλητα που περιέχουν άλλους διαλύτες </p>
                                <p>15 01 10* συσκευασίες που περιέχουν κατάλοιπα επικινδύνων ουσιών ή έχουν μολυνθεί από αυτές</p>
                                <p>15 01 11* μεταλλική συσκευασία που περιέχει επικίνδυνη μήτρα στερεού πορώδους υλικού  (π.χ. αμιάντου), περιλαμβανομένων των κενών δοχείων υπό πίεση </p>
                                <p>15 02 02* απορροφητικά υλικά, υλικά φίλτρων (περιλαμβανομένων των φίλτρων ελαίου που δεν  προδιαγράφονται άλλως), υφάσματα σκουπίσματος, προστατευτικός ρουχισμός που  έχουν μολυνθεί από επικίνδυνες ουσίες </p>
                                <p>16 06 01* μπαταρίες μολύβδου </p>
                                <p>16 06 02* μπαταρίες Νi-Cd </p>
                                <p>16 06 03* μπαταρίες που περιέχουν υδράργυρο </p>
                                <p>16 07 08* απόβλητα που περιέχουν πετρέλαιο</p>
                                <p>16 10 01* υδαρή υγρά απόβλητα που περιέχουν επικίνδυνες ουσίες </p>
                            </div>
                        </div>
                    </div>
                    {/* fourth */}
                    <div className="flex w-full items-stretch border-b">
                        {/* Left column */}
                        <div className="w-[15%] border-r border-black flex justify-center p-2 text-center font-semibold">
                            <p>Άλλα απόβλητα  </p>
                        </div>

                        {/* Right column */}
                        <div className="w-[85%] p-3 text-justify leading-relaxed">
                            <div>
                                <p>08 01 12 απόβλητα από χρώματα και βερνίκια άλλα από τα αναφερόμενα στο σημείο 08 01 11 </p>
                                <p>08 01 14 λάσπες από χρώματα ή βερνίκια άλλα από τα αναφερόμενα στο σημείο 08 01 13 </p>
                                <p>08 01 17* απόβλητα από αφαίρεση χρωμάτων ή βερνικιών που περιέχουν οργανικούς διαλύτες  ή άλλες επικίνδυνες ουσίες </p>
                                <p>15 02 03 απορροφητικά υλικά, υλικά φίλτρων, υφάσματα σκουπίσματος και προστατευτικός  ρουχισμός άλλα από τα αναφερόμενα στο σημείο 15 02 02 </p>
                                <p>16 06 04 αλκαλικές μπαταρίες (εκτός από το σημείο 16 06 03) </p>
                                <p>20 01 01 χαρτιά και χαρτόνια</p>
                                <p>20 01 08 βιοαποικοδομήσιμα απόβλητα κουζίνας και χώρων ενδιαίτησης</p>
                                <p>20 01 25 βρώσιμα έλαια και λίπη</p>
                                <p>20 01 36 απορριπτόμενος ηλεκτρικός και ηλεκτρονικός εξοπλισμός άλλος από τον αναφερόμενο  στα σημεία 20 01 21 , 20 01 23 και 20 01 35 </p>
                                <p>20 01 99 άλλα μέρη μη προδιαγραφόμενα άλλως</p>
                                <p>20 02 01 βιοαποικοδομήσιμα απόβλητα</p>
                            </div>
                        </div>
                    </div>
                    {/* fifth */}
                    <div className="flex w-full items-stretch border-b border-t">
                        {/* Left column */}
                        <div className="w-[15%] border-r border-black flex justify-center items-center p-2 text-center font-semibold">
                            <p>Στήλη (3)  </p>
                        </div>

                        {/* Right column */}
                        <div className="w-[85%] p-3 text-justify leading-relaxed">
                            <div>
                                <p>Στην στήλη «<span className='font-bold'>Εκτίμηση της παραγόμενης ποσότητας</span>» καταγράφεται η ποσότητα ΑΕΚΚ σε τόνους που προβλέπεται να παραχθεί στη συγκεκριμένη φάση και αντιστοιχεί σε ένα κωδικό ΕΚΑ. Η ποσότητα αυτή προκύπτει αυτόματα ως το άθροισμα των στηλών (4), (5) και (6) με εξαίρεση τις γραμμές που αφορούν στα επικίνδυνα ΑΕΚΚ, όπου η συνολική ποσότητα και μόνο συμπληρώνεται από τον υπόχρεο.</p>
                            </div>
                        </div>
                    </div>
                    {/* sixth */}
                    <div className="flex w-full items-stretch border-b border-t">
                        {/* Left column */}
                        <div className="w-[15%] border-r border-black flex justify-center items-center p-2 text-center font-semibold">
                            <p>Στήλη (4)</p>
                        </div>

                        {/* Right column */}
                        <div className="w-[85%] p-3 text-justify leading-relaxed">
                            <div>
                                <p>Στη στήλη «<span className='font-bold'>Εκτίμηση Επαναχρησιμοποιούμενης Ποσότητας</span>» συμπληρώνεται η ποσότητα ΑΕΚΚ που αφορά σε υλικά που  επαναχρησιμοποιούνται για τους σκοπούς για τους οποίους σχεδιάστηκαν ή υπήρξαν (για το σκοπό που που επιτελούσαν) (βάση του ορισμού της ΚΥΑ 36259/2010)</p>
                            </div>
                        </div>
                    </div>
                    {/* seventh */}
                    <div className="flex w-full items-stretch border-b border-t">
                        {/* Left column */}
                        <div className="w-[15%] border-r border-black flex justify-center items-center p-2 text-center font-semibold">
                            <p>Στήλη (5)</p>
                        </div>

                        {/* Right column */}
                        <div className="w-[85%] p-3 text-justify leading-relaxed">
                            <div>
                                <p>Στη στήλη «<span className='font-bold'>Εκτίμηση Ανακτώμενης Ποσότητας</span>» συμπληρώνεται το άθροισμα των ποσοτήτων που  οδηγούνται: α) σε ΣΣΕΔ ΑΕΚΚ, β) σε άλλα ΣΣΕΔ , γ) σε αδειοδοτημένες μονάδες επεξεργασίας στερεών αποβλήτων παντός τύπου, δ) για επιχώσεις και αποκατάσταση ανενεργών μεταλλείων,  λατομείων και άλλων χώρων που χρήζουν αποκατάστασης π.χ. Χ.Υ.Τ.Α.</p>
                            </div>
                        </div>
                    </div>
                    {/* eighth */}
                    <div className="flex w-full items-stretch  border-t">
                        {/* Left column */}
                        <div className="w-[15%] border-r border-black flex justify-center items-center p-2 text-center font-semibold">
                            <p>Στήλη (6)</p>
                        </div>

                        {/* Right column */}
                        <div className="w-[85%] p-3 text-justify leading-relaxed">
                            <div>
                                <p>Στη στήλη "<span className='font-bold'>Εκτίμηση Ποσότητας προς Τελική Διάθεση</span>" συμπληρώνεται η ποσότητα των ΑΕΚΚ που οδηγούνται σε Χ.Υ.Τ. Αδρανών</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FcsvD10
