import React from "react";

const TemplateThree = () => {
  return (
    <div
      style={{
        maxWidth: "1024px",
        margin: "0 auto",
        padding: "16px",
        backgroundColor: "white",
      }}
    >
      {/* Header with coat of arms */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <div
          style={{
            width: "64px",
            height: "64px",
            margin: "0 auto",
            marginBottom: "16px",
            backgroundColor: "#e2e2e2",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: "black",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "white",
                borderRadius: "4px",
              }}
            ></div>
          </div>
        </div>
        <h1
          style={{ fontSize: "20px", fontWeight: "600", marginBottom: "8px" }}
        >
          ΥΠΕΥΘΥΝΗ ΔΗΛΩΣΗ
        </h1>
        <p style={{ fontSize: "12px" }}>(άρθρο 8 Ν.1599/1986)</p>
      </div>

      {/* Subtitle */}
      <div
        style={{ textAlign: "center", marginBottom: "24px", fontSize: "12px" }}
      >
        <p>
          Η ακρίβεια των στοιχείων που υποβάλλονται με αυτή τη δήλωση μπορεί να
          ελεγχθεί με βάση το αρχείο άλλων υπηρεσιών
        </p>
        <p>(άρθρο 8 παρ. 4 Ν.1599/1986)</p>
      </div>

      {/* Form table */}
      <div style={{ border: "1px solid #ccc" }}>
        {/* ΠΡΟΣ row */}
        <div
          style={{ borderBottom: "1px solid #ccc", backgroundColor: "#f1f1f1" }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "80px",
                padding: "8px",
                borderRight: "1px solid #ccc",
                fontWeight: "700",
                fontSize: "12px",
              }}
            >
              ΠΡΟΣ(1):
            </div>
            <div
              style={{
                flex: "1",
                padding: "8px",
                color: "#1E40AF",
                fontWeight: "700",
              }}
            >
              YDOM
            </div>
          </div>
        </div>

        {/* Name Owner row */}
        <div style={{ borderBottom: "1px solid #ccc" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "128px",
                padding: "8px",
                borderRight: "1px solid #ccc",
                fontSize: "12px",
              }}
            >
              Ο-Η Όνομα
            </div>
            <div
              style={{
                width: "160px",
                padding: "8px",
                borderRight: "1px solid #ccc",
                color: "#1E40AF",
                fontWeight: "700",
              }}
            >
              Name Owner
            </div>
            <div
              style={{
                width: "80px",
                padding: "8px",
                borderRight: "1px solid #ccc",
                fontSize: "12px",
              }}
            >
              Επώνυμο
            </div>
            <div
              style={{
                flex: "1",
                padding: "8px",
                color: "#1E40AF",
                fontWeight: "700",
              }}
            >
              Surname Owner
            </div>
          </div>
        </div>

        {/* Father's name row */}
        <div style={{ borderBottom: "1px solid #ccc" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "128px",
                padding: "8px",
                borderRight: "1px solid #ccc",
                fontSize: "12px",
              }}
            >
              Όνομα και Επώνυμο Πατρός
            </div>
            <div style={{ flex: "1", padding: "8px" }}>
              Fathers name and surname Owner
            </div>
          </div>
        </div>

        {/* Mother's name row */}
        <div style={{ borderBottom: "1px solid #ccc" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "128px",
                padding: "8px",
                borderRight: "1px solid #ccc",
                fontSize: "12px",
              }}
            >
              Όνομα και Επώνυμο Μητρός
            </div>
            <div style={{ flex: "1", padding: "8px" }}>
              Mothers name and surname Owner
            </div>
          </div>
        </div>

        {/* Birth date row */}
        <div style={{ borderBottom: "1px solid #ccc" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "128px",
                padding: "8px",
                borderRight: "1px solid #ccc",
                fontSize: "12px",
              }}
            >
              Ημερομηνία γέννησης(2):
            </div>
            <div style={{ flex: "1", padding: "8px" }}>Born date Owner</div>
          </div>
        </div>

        {/* Birth town row */}
        <div style={{ borderBottom: "1px solid #ccc" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "128px",
                padding: "8px",
                borderRight: "1px solid #ccc",
                fontSize: "12px",
              }}
            >
              Τόπος Γέννησης
            </div>
            <div style={{ flex: "1", padding: "8px", color: "#1E40AF" }}>
              Born Town owner
            </div>
          </div>
        </div>

        {/* ID and mobile row */}
        <div style={{ borderBottom: "1px solid #ccc" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "128px",
                padding: "8px",
                borderRight: "1px solid #ccc",
                fontSize: "12px",
              }}
            >
              Αριθμός Δελτίου Ταυτότητας
            </div>
            <div
              style={{
                width: "80px",
                padding: "8px",
                borderRight: "1px solid #ccc",
                color: "#1E40AF",
              }}
            >
              ID
            </div>
            <div
              style={{
                width: "64px",
                padding: "8px",
                borderRight: "1px solid #ccc",
                fontSize: "12px",
              }}
            >
              Τηλ.:
            </div>
            <div style={{ flex: "1", padding: "8px", color: "#1E40AF" }}>
              mobile
            </div>
          </div>
        </div>

        {/* Address row */}
        <div style={{ borderBottom: "1px solid #ccc" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "128px",
                padding: "8px",
                borderRight: "1px solid #ccc",
                fontSize: "12px",
              }}
            >
              Τόπος κατοικίας
            </div>
            <div
              style={{
                width: "80px",
                padding: "8px",
                borderRight: "1px solid #ccc",
                color: "#1E40AF",
              }}
            >
              Town
            </div>
            <div
              style={{
                width: "64px",
                padding: "8px",
                borderRight: "1px solid #ccc",
                fontSize: "12px",
              }}
            >
              Οδός
            </div>
            <div
              style={{
                width: "96px",
                padding: "8px",
                borderRight: "1px solid #ccc",
                color: "#1E40AF",
              }}
            >
              Address
            </div>
            <div
              style={{
                width: "64px",
                padding: "8px",
                borderRight: "1px solid #ccc",
                fontSize: "12px",
              }}
            >
              Αριθ
            </div>
            <div
              style={{
                width: "80px",
                padding: "8px",
                borderRight: "1px solid #ccc",
                color: "#1E40AF",
              }}
            >
              Number
            </div>
            <div
              style={{
                width: "48px",
                padding: "8px",
                borderRight: "1px solid #ccc",
                fontSize: "12px",
              }}
            >
              ΤΚ
            </div>
            <div style={{ flex: "1", padding: "8px", color: "#1E40AF" }}>
              postal code
            </div>
          </div>
        </div>

        {/* Contact details row */}
        <div style={{ borderBottom: "1px solid #ccc" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "128px",
                padding: "8px",
                borderRight: "1px solid #ccc",
                fontSize: "12px",
              }}
            >
              Αρ. Τηλεομοιότυπου (Fax):
            </div>
            <div style={{ flex: "1", padding: "8px" }}>
              <div style={{ fontSize: "12px" }}>
                <div>Δ/νση</div>
                <div>Ηλεκτρ.</div>
                <div>Ταχυδρομ</div>
                <div>ίου (Email):</div>
              </div>
            </div>
            <div style={{ width: "128px", padding: "8px", color: "#1E40AF" }}>
              email owner
            </div>
          </div>
        </div>

        {/* VAT row */}
        <div style={{ borderBottom: "1px solid #ccc" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "128px",
                padding: "8px",
                borderRight: "1px solid #ccc",
                fontSize: "12px",
              }}
            >
              Α.Φ.Μ.:
            </div>
            <div style={{ flex: "1", padding: "8px", color: "#1E40AF" }}>
              VAT owner
            </div>
            <div
              style={{
                width: "128px",
                padding: "8px",
                borderLeft: "1px solid #ccc",
                fontSize: "12px",
              }}
            >
              Δ.Ο.Υ.:
            </div>
          </div>
        </div>

        {/* Declaration text */}
        <div style={{ padding: "16px", fontSize: "12px" }}>
          <p style={{ marginBottom: "16px" }}>
            Με στοιχεία μου ευθύνη και γνωρίζοντας τις κυρώσεις(3), που
            προβλέπονται από τις διατάξεις της παρ. 6 του άρθρου 22 του
            Ν.1599/1986, δηλώνω ότι:
          </p>

          <p style={{ marginBottom: "16px" }}>
            ως Κύριος/διοικητής του ακινήτου που βρίσκεται επί της οδού
            (Address, Number, Town, Postal code),συναινώ ρητά και ανεπιφύλακτα
            στην έκδοση Έγκρισης Εργασιών Μικρής Κλίμακας για την εκτέλεση των
            εργασιών,
          </p>

          <p style={{ marginBottom: "16px" }}>για το έργο με τίτλο :</p>
          <p style={{ color: "#1E40AF", fontWeight: "700" }}>
            PROJECT DESCRIPTION
          </p>
        </div>

        {/* Additional disclaimer text */}
        <div
          style={{
            padding: "16px",
            fontSize: "12px",
            backgroundColor: "#ebf5ff",
            borderTop: "1px solid #ccc",
          }}
        >
          <p style={{ color: "#1E40AF" }}>
            Η παρούσα δήλωση παρέχεται αποκλειστικά για την κάλυψη των
            απαιτήσεων του άρθρου 29 του Ν.4495/2017 και των σχετικών
            κανονιστικών πράξεων.
          </p>
        </div>

        {/* Signature section */}
        <div style={{ borderTop: "1px solid #ccc" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "16px",
            }}
          >
            <div style={{ textAlign: "right" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontSize: "12px" }}>Ημερομηνία :</span>
                <span style={{ fontSize: "12px", fontWeight: "500" }}>
                  8/2/2025
                </span>
              </div>
              <div style={{ fontSize: "12px", marginTop: "32px" }}>
                <div>( Υπογραφή )</div>
                <div style={{ marginTop: "16px" }}>Ο/Η Δηλώνουσα</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateThree;
