import React from 'react'

function FcsvD2() {
    return (
        <div>
            {/* first design  */}
            <div className='flex border text-sm'>
                <p className='text-right bg-[#99CC00] border-r py-2 px-1 flex-1'>Επωνυμία Διαχειριστή:</p>
                <p className='text-left flex-1 py-2 px-1'>SURNAME AND NAME ENGINEER</p>
            </div>
            <div className='flex border border-t-0 text-sm'>
                <p className='text-right bg-[#99CC00] border-r py-2 px-1 flex-1'>Τίτλος Έργου:</p>
                <p className='text-left flex-1 py-2 px-1'>PROJECT DISCRIPSION</p>
            </div>
            {/* header design  */}
            <div className="grid grid-cols-12 border border-black font-bold text-[11px] bg-[#99CC00] mt-8">
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
                    (4) Επαναχρησιμοποιούμενης ποσότητας (σε τόνους)
                </div>
                <div className="col-span-1 border-r border-black p-2 flex items-center justify-center text-center break-words overflow-hidden">
                    (5) Ανακτώμενης Ποσότητας (σε τόνους)
                </div>
                <div className="col-span-2 p-2 flex items-center justify-center text-center break-words overflow-hidden">
                    (6) Ποσότητας προς τελική Διάθεση (σε τόνους)
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
                        #VALLUE
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
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
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
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
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
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
                        17 01 07
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        μείγμα σκυροδέματος, τούβλων, πλακακίων και κεραμικών εκτός εκείνων που περιλαμβάνονται στο σημείο 17 01 06
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
                        #VALLUE
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
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
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
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
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
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
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
                        μείγματα ορυκτής ασφάλτου εκτός εκείνων που περιλαμβάνονται στο σημείο 17 03 01
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
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
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
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
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
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
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
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
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
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
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
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
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
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
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
                    <div className="col-span-1 border-r border-black  bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        17 03 10*
                    </div>
                    <div className="col-span-5 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        καλώδια που περιέχουν πετρέλαιο, λιθανθρακόπισσα και άλλες επικίνδυνες ουσίες
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
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
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
                        17 05 04
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        χώματα και πέτρες άλλα από τα αναφερόμενα στο σημείο 17 05 03
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
                        μπάζα εκσκαφών άλλα από τα αναφερόμενα στο σημείο 17 05 05
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
                        17 03 08
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        έρμα σιδηροτροχιών εκτός εκείνου που περιλαμβάνεται στο σημείο 17 05 07
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
                <p className='text-right bg-[#99CC00] border-r py-2 px-1 flex-1'>Επωνυμία Διαχειριστή:</p>
                <p className='text-left flex-1 py-2 px-1'></p>
            </div>
            <div className='flex border border-t-0 text-sm mb-8'>
                <p className='text-right bg-[#99CC00] border-r py-2 px-1 flex-1'>Τίτλος Έργου:</p>
                <p className='text-left flex-1 py-2 px-1'></p>
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
                        17 06 03*
                    </div>
                    <div className="col-span-5 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        άλλα μονωτικά υλικά που αποτελούνται από επικίνδυνες ουσίες ή τις περιέχουν
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
                        0,00
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
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
                        17 08 02
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        υλικά δμικών κατασκευών με βάση το γύψο εκτός εκείνων που περιλαμβάνονται στο σημείο 17 08 01
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
                        17 09 02*
                    </div>
                    <div className="col-span-5 border-r border-black bg-[#C0C0C0] p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        απόβλητα δομικών κατασκευών και κατεδαφίσεων που περιέχουν PCB (π.χ. στεγανωτικά υλικά που περιέχουν PCB, δάπεδα με βάση ρητίνες που περιέχουν PCB, μονάδες στεγανοποιημένης υαλόφραξης που περιέχουν PCB, πυκνωτές που περιέχουν PCB)
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
                        17 09 03*
                    </div>
                    <div className="col-span-5 border-r border-black p-2 flex items-center justify-start text-center break-words overflow-hidden">
                        μείγματα αποβλήτων δοκιμών κατασκρυών και κατεδαφίσεων εκτός εκείνων που περιλαμβάνοτναι στα σημεία 17 09 01, 17 09 02 και 17 09 03.
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
                    <div className="col-span-2 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
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
                    <div className="col-span-2 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
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
                    <div className="col-span-2 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
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
                    <div className="col-span-2 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
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
                    <div className="col-span-2 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
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
                    <div className="col-span-2 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
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
                    <div className="col-span-2 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
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
                    <div className="col-span-2 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
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
                    <div className="col-span-2 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
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
                    <div className="col-span-2 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
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
                    <div className="col-span-2 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
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
                    <div className="col-span-2 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
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
                    <div className="col-span-2 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
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
                    <div className="col-span-2 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
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
                    <div className="col-span-2 border-r border-black py-3 p-2 flex items-center justify-end text-center break-words overflow-hidden">
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
                        #VALLUE!
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                </div>
            </div>
            {/* small table  */}
            <div className='py-8 w-11/16'>
                <div>
                    <div></div>
                    <div>
                        <div
                    className="grid grid-cols-12 border border-black font-bold text-[11px] bg-white"
                >
                    <div className="col-span-2 border-r border-b-0 border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
                    </div>
                    <div className="col-span-8 border-r border-black py-3 p-2 flex items-center justify-start text-center break-words overflow-hidden">
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
                        #VALLUE!
                    </div>
                    <div className="col-span-1 border-r border-black p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                    <div className="col-span-2 p-2 flex items-center justify-end text-center break-words overflow-hidden">
                        0,00
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FcsvD2
