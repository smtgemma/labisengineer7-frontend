// import { useState, useEffect } from "react";

// interface ImageConversionModalProps {
//   onClose?: () => void;
//   onDownload?: () => void;
//   setIsOpen?: (isOpen: boolean) => void; // Optional controlled state
//   isOpen?: boolean; // Optional controlled prop
// }

// const ImageConversionModal = ({
//   onClose,
//   onDownload,

//   isOpen,
//   setIsOpen,
// }: ImageConversionModalProps) => {
//   const [isMobile, setIsMobile] = useState<boolean>(false);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 640); // Tailwind's 'sm' breakpoint
//     };

//     // Initial check
//     checkScreenSize();

//     // Add event listener for window resize
//     window.addEventListener("resize", checkScreenSize);

//     // Cleanup function to remove event listener
//     return () => {
//       window.removeEventListener("resize", checkScreenSize);
//     };
//   }, []);

//   const handleClose = () => {
//     setIsOpen(false);
//     if (onClose) onClose();
//   };

//   const handleDownload = () => {
//     if (onDownload) onDownload();
//     // You might want to close the modal after download
//     // setIsOpen(false);
//   };

//   if (!isOpen) return null;

//   return (

//   );
// };

// export default ImageConversionModal;
