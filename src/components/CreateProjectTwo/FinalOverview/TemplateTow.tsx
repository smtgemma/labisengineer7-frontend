import React from "react";

const TemplateTow = () => {
  return (
    <div>
      <div
        style={{
          maxWidth: "794px",
          margin: "0 auto",
          padding: "24px",
          backgroundColor: "white",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontWeight: "600",
            textDecoration: "underline",
            fontSize: "14px",
            marginBottom: "8px",
          }}
        >
          ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ - ΒΕΒΑΙΩΣΗ ΜΗΧΑΝΙΚΟΥ
        </h2>

        <div style={{ marginBottom: "32px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "450px",
            }}
          >
            <span style={{ minWidth: "80px", fontSize: "12px" }}>Έργο:</span>
            <h3 style={{ fontSize: "12px" }}>PROJECT DESCRIPTION</h3>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "16px",
              maxWidth: "100%",
            }}
          >
            <span style={{ fontSize: "12px" }}>Θέση:</span>
            <h3 style={{ fontSize: "12px" }}>
              ADDRESS, TOWN/AREA , POSTAL CODE ( FOR BUILDING)
            </h3>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "400px",
              marginLeft: "25px",
              fontSize: "12px",
            }}
          >
            <span>Ιδιοκτήτης:</span>
            <h3 style={{ fontSize: "12px" }}>OWNER/OWNERS</h3>
          </div>
        </div>

        <div
          style={{
            fontSize: "12px",
            marginBottom: "16px",
            marginLeft: "24px",
          }}
        >
          <p>
            Στο ακίνητο{" "}
            <span style={{ fontWeight: "600" }}>
              Description for building/ horizontal property
            </span>{" "}
            επί της οδού <br />{" "}
            <span style={{ fontWeight: "600" }}>
              Address,Town/Area , postal code ( FOR BUILDING),
            </span>
            πρόκειται να <br /> εκτελεσθούν οι παρακάτω εργασίες :
          </p>
        </div>

        <div style={{ marginLeft: "24px" }}>
          <div style={{ display: "flex", gap: "12px" }}>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginTop: "4px",
                color: "black",
              }}
            >
              ●
            </div>
            <div style={{ flex: "1" }}>
              <h3
                style={{
                  fontWeight: "700",
                  color: "black",
                  marginBottom: "8px",
                }}
              >
                Αλλαγή Χρήσης Χώρου
              </h3>
              <div
                style={{
                  textAlign: "justify",
                  lineHeight: "1.75",
                  fontSize: "12px",
                  color: "black",
                }}
              >
                <p style={{ marginBottom: "8px" }}>
                  Αλλαγή Χρήσης Χώρου Η Αφορά την τροποποίηση της χρήσης του
                  χώρου ................ (π.χ. ισόγειου αποθηκευτικού χώρου με
                  εμβαδόν ... τ.μ.), ο οποίος βάσει της εγκεκριμένης οικοδομικής
                  άδειας ......../........ φέρει χρήση ........ (π.χ.
                  αποθήκης/χώρου στάθμευσης) και βρίσκεται στον ................
                  (όροφο/ισόγειο/υπόγειο), με αυτόνομη πρόσβαση μέσω
                  ................ (π.χ. ιδιωτικής εισόδου ή κοινόχρηστων
                  χώρων). Η κατασκευή του χώρου είναι σύμφωνη με την εγκεκριμένη
                  στατική και αρχιτεκτονική μελέτη της άδειας. Η προτεινόμενη
                  αλλαγή χρήσης αφορά τη μετατροπή του σε ................ (π.χ.
                  κατοικία, κατάστημα κλπ.), χωρίς επέμβαση στον φέροντα
                  οργανισμό ή τροποποίηση του εξωτερικού όγκου και των όψεων του
                  κτιρίου, ενώ η νέα χρήση είναι πλήρως συμβατή με τις
                  θεσμοθετημένες χρήσεις γης της περιοχής.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginTop: "4px",
                color: "black",
              }}
            >
              ●
            </div>
            <div style={{ flex: "1" }}>
              <h3
                style={{
                  fontWeight: "700",
                  color: "black",
                  marginBottom: "8px",
                }}
              >
                Καθαίρεση εσωτερικών τοιχοποιιών και απομάκρυνση μπαζών
              </h3>
              <p
                style={{
                  textAlign: "justify",
                  lineHeight: "1.75",
                  fontSize: "12px",
                  color: "black",
                }}
              >
                Αποξήλωση τοιχοποιιών από τούβλο ή γυψοσανίδα, απομάκρυνση
                μπαζών και καθαρισμός χώρου. Περιλαμβάνει χρήση κοπτικών
                εργαλείων και προστασία γειτονικών κατασκευών.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginTop: "4px",
                color: "black",
              }}
            >
              ●
            </div>
            <div style={{ flex: "1" }}>
              <h3
                style={{
                  fontWeight: "700",
                  color: "black",
                  marginBottom: "8px",
                }}
              >
                Αποξηλώσεις υφιστάμενων εσωτερικών κουφωμάτων/πορτών, ντουλαπιών
                κουζίνας και ντουλαπών
              </h3>
              <p
                style={{
                  textAlign: "justify",
                  lineHeight: "1.75",
                  fontSize: "12px",
                  color: "black",
                }}
              >
                Αφαίρεση με προσοχή για ελαχιστοποίηση φθορών, απομάκρυνση από
                τον χώρο και καθαρισμός υπολειμμάτων.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateTow;
