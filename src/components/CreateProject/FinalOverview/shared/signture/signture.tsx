"use client";

interface StampComponentProps {
  // Optional prop to customize text for "ΣΦΡΑΓΙΔΑ ΜΗΧΑΝΙΚΟΥ"
  title?: string;
  // Optional prop to pass custom instructions
  instructions?: string[];
}

const StampComponent: React.FC<StampComponentProps> = ({
  title = "ΣΦΡΑΓΙΔΑ ΜΗΧΑΝΙΚΟΥ",
  instructions = [
    "Με δεξί κλικ",
    '"Αλλαγή εικόνας"',
    "Βάζετε την σφραγίδα σας",
  ],
}) => {
  return (
    <div className="border-3 border-dashed border-black text-center p-4 mb-8">
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      {instructions.map((instruction, index) => (
        <p key={index} className="text-sm font-bold mb-1">
          {instruction}
        </p>
      ))}
    </div>
  );
};

export default StampComponent;
