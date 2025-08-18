// import StampComponent from '@/component/shared/dashed/Dashed';
import React from 'react';

function F1D7() {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white">
      {/* Header with coat of arms */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-sm"></div>
          </div>
        </div>
        <h1 className="text-xl font-bold mb-2">ΥΠΕΥΘΥΝΗ ΔΗΛΩΣΗ</h1>
        <p className="text-sm">(άρθρο 8 Ν.1599/1986)</p>
      </div>

      {/* Subtitle */}
      <div className="text-center mb-6 text-sm">
        <p>
          Η ακρίβεια των στοιχείων που υποβάλλονται με αυτή τη δήλωση μπορεί να ελεγχθεί με βάση το αρχείο άλλων
          υπηρεσιών
        </p>
        <p>(άρθρο 8 παρ. 4 Ν.1599/1986)</p>
      </div>

      {/* Form table */}
      <div className="border border-gray-400">
        {/* ΠΡΟΣ row */}
        <div className="border-b border-gray-400 bg-gray-50">
          <div className="flex">
            <div className="w-24 p-2 border-r border-gray-400 font-bold text-sm">ΠΡΟΣ(1):</div>
            <div className="flex-1 p-2  font-bold">YDOM</div>
          </div>
        </div>

        {/* Name Engineer row */}
        <div className="border-b border-gray-400">
          <div className="flex">
            <div className="w-40 p-2 border-r border-gray-400 text-sm">Ο-Η Όνομα</div>
            <div className="w-40 p-2 border-r border-gray-400  font-bold">Name Engineer</div>
            <div className="w-32 p-2 border-r border-gray-400 text-sm">Επώνυμο</div>
            <div className="flex-1 p-2 0 font-bold">Surname Engineer</div>
          </div>
        </div>

        {/* Father's name row */}
        <div className="border-b border-gray-400">
          <div className="flex">
            <div className="w-40 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Πατρός</div>
            <div className="flex-1 p-2 font-bold">Fathers name and surname Engineer</div>
          </div>
        </div>

        {/* Mother's name row */}
        <div className="border-b border-gray-400">
          <div className="flex">
            <div className="w-40 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Μητρός</div>
            <div className="flex-1 p-2 font-bold">Mothers name and surname Engineer</div>
          </div>
        </div>

        {/* Birth date row */}
        <div className="border-b border-gray-400">
          <div className="flex">
            <div className="w-40 p-2 border-r border-gray-400 text-sm">Ημερομηνία γέννησης(2):</div>
            <div className="flex-1 p-2 font-bold">Born date Engineer</div>
          </div>
        </div>

        {/* Birth town row */}
        <div className="border-b border-gray-400">
          <div className="flex">
            <div className="w-40 p-2 border-r border-gray-400 text-sm">Τόπος Γέννησης</div>
            <div className="flex-1 p-2 font-bold">Born Town Engineer</div>
          </div>
        </div>

        {/* ID and mobile row */}
        <div className="border-b border-gray-400">
          <div className="flex">
            <div className="w-40 p-2 border-r border-gray-400 text-sm">Αριθμός Δελτίου Ταυτότητας</div>
            <div className="w-32 p-2 border-r border-gray-400 font-bold">ID</div>
            <div className="w-24 p-2 border-r border-gray-400 text-sm">Τηλ.:</div>
            <div className="flex-1 p-2 font-bold">mobile</div>
          </div>
        </div>

        {/* Address row */}
        <div className="border-b border-gray-400">
          <div className="flex">
            <div className="w-40 p-2 border-r border-gray-400 text-sm">Τόπος κατοικίας</div>
            <div className="w-32 p-2 border-r border-gray-400 font-bold">Town</div>
            <div className="w-24 p-2 border-r border-gray-400 text-sm">Οδός</div>
            <div className="w-40 p-2 border-r border-gray-400 font-bold">Address</div>
            <div className="w-24 p-2 border-r border-gray-400 text-sm">Αριθ</div>
            <div className="w-28 p-2 border-r border-gray-400 font-bold">Number</div>
            <div className="w-16 p-2 border-r border-gray-400 text-sm">ΤΚ</div>
            <div className="flex-1 p-2 font-bold">postal code</div>
          </div>
        </div>

        {/* Contact details row */}
        <div className="border-b border-gray-400">
          <div className="flex">
            <div className="w-40 p-2 border-r border-gray-400 text-sm">Αρ. Τηλεομοιότυπου (Fax):</div>
            <div className="flex-1 p-2">
              <div className="text-sm">
                <div>Δ/νση</div>
                <div>Ηλεκτρ.</div>
                <div>Ταχυδρομ</div>
                <div>ίου (Email):</div>
              </div>
            </div>
            <div className="w-32 p-2 ">email Engineer</div>
          </div>
        </div>

        {/* VAT row */}
        <div className="border-b border-gray-400">
          <div className="flex">
            <div className="w-40 p-2 border-r border-gray-400 text-sm">Α.Φ.Μ.:</div>
            <div className="flex-1 p-2 font-bold">VAT Engineer</div>
            <div className="w-40 p-2 border-l border-gray-400 text-sm">Δ.Ο.Υ.:</div>
          </div>
        </div>

        {/* Declaration text */}
        <div className="p-4 text-sm">
          <p className="mb-4">
            Με στοιχεία μου ευθύνη και γνωρίζοντας τις κυρώσεις(3), που προβλέπονται από τις διατάξεις της παρ. 6 του
            άρθρου 22 του Ν.1599/1986, δηλώνω ότι:
          </p>

          <p className="mb-4">
           ότι εφαρμόζοντας τις ισχύουσες γενικές και ειδικές πολεοδομικές διατάξεις <span className='font-bold'>αναλαμβάνω</span> για το έργο
           
          </p>

        
          <p className=" font-bold mb-10 text-xl">PROJECT DESCRIPTION</p>
        </div>

        {/* Additional disclaimer text */}
        <div className="p-4 text-sm ">
          <p className="">
          τη συνολική διαχείριση του έργου στο ηλεκτρονικό σύστημα του ΤΕΕ - eadeies που αφορά:       
          </p>
          <p>
            ●Την εκπόνηση και υποβολή των απαραίτητων μελετών (στατικών, αρχιτεκτονικών, τεχνικών, περιβαλλοντικών κ.ά.) όπου απαιτείται.
          </p>
          <p>
            ●Την κατάρτιση και υποβολή του φακέλου στην αρμόδια υπηρεσία (e-Άδειες / ΥΔΟΜ )
          </p>
          <p>
            ●Τη συνεργασία με άλλους ειδικούς/μελετητές, όπου απαιτείται
          </p>
        </div>

        {/* Signature section */}
        <div className="">
          <div className="flex justify-end p-4">
            <div className="text-right space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-sm">Ημερομηνία :</span>
                <span className="text-sm font-medium">8/2/2025</span>
              </div>
              <div className="text-sm mt-8">
                <div>( Υπογραφή )</div>
                <div className="mt-4">Ο/Η Δηλώνουσα</div>
              </div>
            </div>
          </div>
        </div>
        {/* common component  */}
          {/* <div className="flex justify-end items-center mt-6">
            <StampComponent />
          </div> */}
      </div>
    </div>
  );
}

export default F1D7;
