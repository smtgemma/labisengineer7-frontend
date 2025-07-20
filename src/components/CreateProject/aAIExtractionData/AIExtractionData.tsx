"use client";
import { div } from "framer-motion/client";
import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  projectDescription: string;
  cadastralCode: string;
  type: string;
  construction: string;
  area: string;
  titleArea: string;
  building: string;
  floor: string;
  address: string;
  buildingCode: string;
  neighborhood: string;
  municipal: string;
};

const inputStyle =
  "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

const AIExtractionDataInPut = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    // Here you can send data to API
  };

  return (
    <div>
      <div className="mt-[-40px]">
        <h2 className="text-[#333333] text-5xl font-semibold">
          AI Extraction Data
        </h2>
        <p className=" text-[#777777] mt-3">
          Here is the extracted information. Please review and confirm.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-8 py-16 mt-10"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
          Project & Ownership Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">
              Περιγραφή Έργου
            </label>
            <input
              {...register("projectDescription")}
              className={inputStyle}
              placeholder="Ανακαίνιση κατοικίας"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Κτηματολογικός Κωδικός (ΚΑΕΚ)
            </label>
            <input
              {...register("cadastralCode")}
              className={inputStyle}
              placeholder="065-123-000-458"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Τύπος</label>
            <input
              {...register("type")}
              className={inputStyle}
              placeholder="Ανακαίνιση οικογενειακού διαμερίσματος"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Κατασκευής</label>
            <input
              {...register("construction")}
              className={inputStyle}
              placeholder="Ανακαίνιση οικογενειακού διαμερίσματος"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Επιφάνεια Περιοχής
            </label>
            <input
              {...register("area")}
              className={inputStyle}
              placeholder="120 τ.μ."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Περιοχή Τίτλου Κυριότητας
            </label>
            <input
              {...register("titleArea")}
              className={inputStyle}
              placeholder="118 τ.μ."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Κτίριο</label>
            <input
              {...register("building")}
              className={inputStyle}
              placeholder="Αριθμός Διαμερίσματος"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Όροφος</label>
            <input
              {...register("floor")}
              className={inputStyle}
              placeholder="3rd Floor"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Κτίριο Διεύθυνσης
            </label>
            <input
              {...register("address")}
              className={inputStyle}
              placeholder="12 Irmou Street"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Κωδικός Δόμησης
            </label>
            <input
              {...register("buildingCode")}
              className={inputStyle}
              placeholder="BLG-2025-011"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Κτίριο Γειτονιάς
            </label>
            <input
              {...register("neighborhood")}
              className={inputStyle}
              placeholder="Νέα Σμύρνη"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Δημοτικό/Κοινοτικό Κτίριο
            </label>
            <input
              {...register("municipal")}
              className={inputStyle}
              placeholder="Δήμος Αθηναίων"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AIExtractionDataInPut;
