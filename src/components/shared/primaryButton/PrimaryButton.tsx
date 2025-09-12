type PrimaryButtonProps = {
    label: string;
    onClick?: () => void;
};

const PrimaryButton = ({ label, onClick }: PrimaryButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="text-white px-8 py-3 font-medium shadow-sm transition-colors cursor-pointer"
            style={{
                borderRadius: "8px",
                background: "linear-gradient(44deg, #017AFF 37.44%, #61BDFF 67.11%)",
            }}
        >
            {label}
        </button>
    );
};

export default PrimaryButton;
