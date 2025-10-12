import React from 'react'

function FcsvD1() {
  return (
    <div>
      <div className='bg-[#99CC00] p-3'>
        <h3 className='text-center mt-2 mb-5 text-sm font-bold'>1. ΒΑΣΙΚΕΣ ΠΛΗΡΟΦΟΡΙΕΣ</h3>
        {/* first design  */}
        <div className='flex items-center justify-between mr-6'>
          {/* left side  */}
          <div className="space-y-5 flex-1">
            <div className='flex items-center gap-5 text-sm'>
              <p className='font-bold'>1.1</p>
              <p>Τίτλος Έργου:</p>
            </div>
            <div className='flex items-center gap-5 text-sm'>
              <p className='font-bold'>1.2</p>
              <p>Κατηγορία Έργου:</p>
            </div>
            <div className='flex items-center gap-5 text-sm'>
              <p className='font-bold'>1.3</p>
              <p>Τόπος Υλοποίησης Έργου:</p>
            </div>
          </div>
          {/* right side  */}
          <div className='flex-1'>
            <p className="border border-black border-b-0 py-2 text-center font-semibold text-sm bg-white w-full">
              PROJECT DESCRIPTION
            </p>
            <p className="border border-black py-2 text-center font-semibold text-sm bg-white w-full">
              ΟΙΚΟΔΟΜΙΚΟ ΕΡΓΟ
            </p>
            <p className="border border-black border-t-0 py-2 text-center font-semibold text-sm bg-white w-full">
              ADRESS,TOWN, CITY, POSTAL CODE
            </p>
          </div>
        </div>
        {/* second design  */}
        <div className='flex justify-between mt-5 mr-6'>
          <div className='flex-1'>
            <div className='flex items-center gap-5 text-sm'>
              <p className='font-bold'>1.4</p>
              <p>Τίτλος Έργου:</p>
            </div>
          </div>
          <div className='flex-1'>
            <p className="border border-black py-2 pl-1 font-semibold text-sm bg-white w-full">
              1.
            </p>
            <p className="border border-black border-t-0 py-2 pl-1 font-semibold text-sm bg-white w-full">
              2.
            </p>
            <p className="border border-black border-t-0 py-2 pl-1 font-semibold text-sm bg-white w-full">
              3.
            </p>
            <p className="border border-black border-t-0 py-2 pl-1 font-semibold text-sm bg-white w-full">
              4.
            </p>
            <p className="border border-black border-t-0 py-2 pl-1 font-semibold text-sm bg-white w-full">
              5.
            </p>
            <p className="border border-black border-t-0 py-2 pl-1 font-semibold text-sm bg-white w-full">
              6.
            </p>
            <p className="border border-black border-t-0 py-2 pl-1 font-semibold text-sm bg-white w-full">
              7.
            </p>
            <p className="border border-black border-t-0 py-2 pl-1 font-semibold text-sm bg-white w-full">
              8.
            </p>
            <p className="border border-black border-t-0 py-2 pl-1 font-semibold text-sm bg-white w-full">
              9.
            </p>
            <p className="border border-black border-t-0 py-2 pl-1 font-semibold text-sm bg-white w-full">
              10.
            </p>
          </div>
        </div>
        {/* third design  */}
        <div className='flex items-center justify-between mr-6 mt-5'>
          {/* left side  */}
          <div className="space-y-5 flex-1">
            <div className='flex items-center gap-5 text-sm'>
              <p className='font-bold'>1.5</p>
              <p>Προβλεπόμενη Ημερομηνία Έναρξης Έργου:</p>
            </div>
            <div className='flex items-center gap-5 text-sm'>
              <p className='font-bold'>1.6</p>
              <p>Προβλεπόμενη Ημερομηνία Λήξης Έργου:</p>
            </div>
          </div>
          {/* right side  */}
          <div className='flex-1'>
            <p className="border border-black border-b-0 py-2 text-center font-semibold text-sm bg-white w-full">
              DATE PROJECT
            </p>
            <p className="border border-black py-2 text-center font-semibold text-sm bg-white w-full">
              1 YEAR AFTER
            </p>
          </div>
        </div>
        {/* four design  */}
        <div className='flex items-center justify-between mr-6 mt-5'>
          {/* left side  */}
          <div className="flex-1">
            <div className='flex items-center gap-5 text-sm'>
              <p className='font-bold'>1.7</p>
              <p>Κύριος του Έργου:</p>
            </div>
          </div>
          {/* right side  */}
          <div className='flex-1'>
            <p className="border border-black py-2 text-center font-semibold text-sm bg-white w-full">
              OWNER
            </p>
          </div>
        </div>
        {/* five design  */}
        <div className='flex items-center justify-between mr-6 mt-5'>
          {/* left side  */}
          <div className="space-y-5 flex-1">
            <div className='flex items-center gap-5 text-sm'>
              <p className='font-bold'>1.8</p>
              <p>Επωνυμία Διαχειριστή:</p>
            </div>
            <div className='flex items-center gap-5 text-sm'>
              <p className='font-bold'>1.9</p>
              <p>Διεύθυνση Διαχειριστή:</p>
            </div>
          </div>
          {/* right side  */}
          <div className='flex-1'>
            <p className="border border-black py-2 text-center font-semibold text-sm bg-white w-full">
              SURNAME AND NAME ENGINEER
            </p>
            <p className="border border-black border-t-0 py-2 text-center font-semibold text-sm bg-white w-full">
              ADRESS, CITY, POSTAL COSE ENGINEER
            </p>
          </div>
        </div>Φάση Έργου: 
        {/* six design  */}
        <div className='flex items-center justify-between mr-6 mt-5'>
          {/* left side  */}
          <div className="space-y-5 flex-1">
            <div className='flex items-center gap-5 text-sm'>
              <p className='font-bold'>1.10</p>
              <p>α) Υπάρχει σύμβαση συνεργασίας με ΣΣΕΔ ΑΕΚΚ;</p>
            </div>
            <div className='flex items-center gap-5 text-sm'>
              <p className='font-bold'></p>
              <p>β) Υπάρχει Υπεύθυνη Δήλωση για πρόθεση <br /> συνεργασίας με ΣΣΕΔ ΑΕΚΚ</p>
            </div>
          </div>
          {/* right side  */}
          <div className='flex-1'>
            <div className='flex items-center gap-1'>
              <span>NAI</span>
              <p className="border border-[#1A73E8] py-2 h-10 text-center font-semibold text-sm bg-[#DAEEF3] w-16">
              </p>
              <p className="border border-black py-2 h-10 text-center font-semibold text-sm bg-white w-full">
              </p>
            </div>
            <div className='flex items-center gap-1'>
              <span>NAI</span>
              <p className="border border-black border-t-0 py-2 h-10 text-center font-semibold text-sm bg-white w-16">
              </p>
              <p className="border border-black border-t-0 py-2 h-10 text-center font-semibold text-sm bg-white w-full">
              </p>
            </div>
          </div>
        </div>
        {/* eight design  */}
        <div className='flex items-center justify-between mr-6 mt-5'>
          {/* left side  */}
          <div className="space-y-5 flex-1">
            <div className='flex items-center gap-5 text-sm'>
              <p className='font-bold'></p>
              <p>γ) Επωνυμία ΣΣΕΔ ΑΕΚΚ</p>
            </div>
            <div className='flex items-center gap-5 text-sm'>
              <p className='font-bold'></p>
              <p>δ) Γεωγραφική Εμβέλεια ΣΣΕΔ ΑΕΚΚ</p>
            </div>
          </div>
          {/* right side  */}
          <div className='flex-1'>
            <p className="border border-black h-10 text-center font-semibold text-sm bg-white w-full">

            </p>
            <p className="border border-black border-t-0 h-10 text-center font-semibold text-sm bg-white w-full"></p>
          </div>
        </div>
      </div>
      {/* text table  */}
      <div className=" py-16">
        {/* <!-- Header --> */}
        <h3 className="text-ms font-semibold">
          ΕΠΕΞΗΓΗΣΕΙΣ
        </h3>

        <div className='border'>
          {/* <!-- Row 1.1 --> */}
          <div className="flex w-full">
            <div className="font-semibold border-r w-12">1.1</div>
            <div className="text-sm text-center p-3 flex-1">
              Συμπληρώνεται ο τίτλος του έργου. Εφόσον πρόκειται για δημόσιο έργου, ο τίτλος του έργου είναι ταυτόσημος με αυτόν της προκήρυξης. Εφόσον πρόκειται για ιδιωτικό έργο, συμπληρώνεται ο πλέον δόκιμος και περιεκτικός τίτλος κατά την κρίση του συμπληρώνοντος τον Σ.Δ.Α.
            </div>
          </div>
          {/* <!-- Row 1.2 --> */}
          <div className="flex border-t w-full">
            <div className="font-semibold border-r w-12">1.2</div>
            <div className="text-sm text-center p-3 flex-1">
               Συμπληρώνεται η κατηγορία του έργου, π.χ. οικοδομικό, υδραυλικό, οδοποιίας, λιμενικό βιομηχανικό-ενεργειακό, κλπ
            </div>
          </div>
          {/* <!-- Row 1.3 --> */}
          <div className="flex border-t w-full">
            <div className="font-semibold border-r w-12">1.3</div>
            <div className="text-sm text-center p-3 flex-1">
              Συμπληρώνεται ο τόπος υλοποίησης του έργου σε επίπεδο Νομού /-ών ή/και Δήμου.
            </div>
          </div>
          {/* <!-- Row 1.4 --> */}
          <div className="flex border-t w-full">
            <div className="font-bold border-r w-12">1.4</div>
            <div className="text-sm text-center p-3 flex-1">
              Συμπληρώνονται επιγραμματικά οι φάσεις του έργου. Εφόσον πρόκειται για δημόσιο
              έργο, οι φάσεις του έργου είναι ταυτόσημες με τις φάσεις της προκήρυξης του
              έργου. Εφόσον πρόκειται για ιδιωτικό έργο, ο καθορισμός των φάσεων είναι πιο
              ελεύθερος με βάση τη φύση του έργου.Για παράδειγμα, κατά την κατασκευή μίας
              πολυκατοικίας οι φάσεις  του έργου μπορεί να διακριθούν σε: α) Εκσκαφές
              θεμελίων, β) Εργασίες σκυροδέτησης – Κατασκευή φέροντος οργανισμού, γ)
              Λοιπές οικοδομικές εργασίες, δ) Έργα πρασίνου – διαμόρφωση περιβάλλοντος
              χώρου.
            </div>
          </div>
          {/* <!-- Row 1.5 --> */}
          <div className="flex border-t w-full">
            <div className="font-bold border-r w-12">1.5</div>
            <div className="text-sm text-center p-3 flex-1">
              Συμπληρώνεται η προβλεπόμενη ημερομηνία έναρξης του έργου: ηη/μμ/εε
            </div>
          </div>
          {/* <!-- Row 1.6 --> */}
          <div className="flex border-t w-full">
            <div className="font-bold border-r  w-12">1.6</div>
            <div className="text-sm text-center p-3 flex-1">
              Συμπληρώνεται η προβλεπόμενη ημερομηνία λήξης του έργου: ηη/μμ/εε
            </div>
          </div>
          {/* <!-- Row 1.7 --> */}
          <div className="flex border-t w-full">
            <div className="font-bold border-r w-12">1.7</div>
            <div className="text-sm text-center p-3 flex-1">
              Συμπληρώνεται η επωνυμία του κύριου του έργου (π.χ. αναθέτουσα αρχή, ιδιώτης)
            </div>
          </div>
          {/* <!-- Row 1.8 --> */}
          <div className="flex border-t w-full">
            <div className="font-bold border-r w-12">1.8</div>
            <div className="text-sm text-center p-3 flex-1">
              Συμπληρώνεται η επωνυμία του διαχειριστή. Διαχειριστής μπορεί να είναι ο ανάδοχος
              του έργου (κατασκευαστής, εργολήπτης τεχνικών και οικοδομικών έργων, φορέας εκμίσθωσης εξοπλισμού και παροχής υπηρεσιών προσωρινής αποθήκευσης, συλλογής και μεταφοράς των ΑΕΚΚ) ή ο κύριος του έργου,
              εφόσον δεν έχει αναθέσει το έργο σε ανάδοχο. (ΚΥΑ 36259/2010 άρθρο 3, παρ. 21)
            </div>
          </div>
          {/* <!-- Row 1.9 --> */}
          <div className="flex border-t w-full">
            <div className="font-bold border-r w-12">1.9</div>
            <div className="text-sm text-center p-3 flex-1">
              Συμπληρώνεται η διεύθυνση της έδρας του διαχειριστή: οδός - αριθμός - πόλη - ταχυδρομικός κώδικας
            </div>
          </div>
          {/* <!-- Row 1.10a --> */}
          <div className="flex border-t w-full">
            <div className="font-bold border-r w-12">1.10a</div>
            <div className="text-sm text-center p-3 flex-1">
              Επιλέγετε ΝΑΙ ή ΌΧΙ.
            </div>
          </div>
          {/* <!-- Row 1.10b --> */}
          <div className="flex border-t w-full">
            <div className="font-bold border-r w-12">1.10B</div>
            <div className="text-sm text-center p-3 flex-1">
              Εφόσον η απάντηση στο 1.10β) είναι ΝΑΙ, πηγαίνετε κατευθείαν στο 1.10 γ).
              Εφόσον η απάντηση στο 1.10α) είναι ΌΧΙ, επιλέγετε ΝΑΙ ή ΌΧΙ και αφήνετε τα 1.10γ) και 1.10δ) κενά.
            </div>
          </div>
          {/* <!-- Row 1.10y --> */}
          <div className="flex border-t w-full">
            <div className="font-bold border-r w-12">1.10y</div>
            <div className="text-sm text-center p-3 flex-1">
              Εφόσον η απάντηση στο 1.10α) είναι ΝΑΙ συμπληρώνεται η επωνυμία του
              συνεργαζόμενου ΣΣΕΔ ΑΕΚΚ
            </div>
          </div>
          {/* <!-- Row 1.10δ --> */}
          <div className="flex border-t w-full">
            <div className="font-bold border-r w-12">1.10δ</div>
            <div className="text-sm text-center p-3 flex-1">
              Εφόσον η απάντηση στο 1.10α) είναι ΝΑΙ συμπληρώνεται η
              γεωγραφική εμβέλεια του συνεργαζόμενου ΣΣΕΔ ΑΕΚΚ
            </div>
          </div>
          {/* <!-- Row 1.11 --> */}
          <div className="flex border-t w-full">
            <div className="font-bold border-r w-12">1.11</div>
            <div className="text-sm text-center p-3 flex-1">
              Συμπληρώνεται το ονοματεπώνυμο και η θέση
              του νόμιμου εκπροσώπου του Διαχειριστή του έργου, που έχει την ευθύνη σύνταξης του ΣΔΑ.
            </div>
          </div>
          {/* <!-- Row 1.12 --> */}
          <div className="flex border-t w-full">
            <div className="font-bold border-r w-12">1.12</div>
            <div className="text-sm text-center p-3 flex-1">
              Συμπληρώνεται η ημερομηνία σύνταξης του ΣΔΑ: ηη/μμ/εε
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FcsvD1
