type PrimaryButtonProps = {
    label?: string;
    onClick?: () => void;
    disabled?: boolean;
    children?: React.ReactNode;
};

const PrimaryButton = ({ label, onClick, disabled, children }: PrimaryButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`px-8 py-3 w-full font-medium shadow-sm transition-colors rounded-lg
        ${disabled ? "cursor-not-allowed bg-gray-300 text-gray-600" : "cursor-pointer text-white"}`}
            style={{
                background: disabled
                    ? "linear-gradient(46deg, #d1d5db 37.44%, #9ca3af 67.11%)"
                    : "linear-gradient(46deg, #017AFF 37.44%, #61BDFF 67.11%)",
            }}
        >
            {children ? children : label}
        </button>
    );
};

export default PrimaryButton;
