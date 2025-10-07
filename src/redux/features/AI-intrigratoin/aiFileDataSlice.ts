import { TProjectData } from "@/interfaces/global";
import { createSlice } from "@reduxjs/toolkit";

export interface Owner {
  name: string;
  last_name: string;
  fathers_name: string;
  mothers_name: string;
  date_of_birth: string;
  place_of_birth: string;
  address: string;
  address_code: string;
  address_municipality_community: string;
  tax_identification_number: string;
  ownership_percentage: string;
  id_number: string;
  mobile: string;
  email: string;
}

export interface FormattedData {
  project_description: string;
  cadastral_code_kaek: string;
  property_type: string;
  surface_areas: string;
  title_deed_area: string;
  building_floor: string;
  address: string;
  building_code: string;
  neighborhood: string;
  municipality_community: string;
  first_owner: Owner;
  second_owner: Owner;
  third_owner: Owner;
  license_number: string;
  license_number_revision: string;
  ydom_description: string;
  horizontal_ownership_description: string;
  horizontal_property_description: string;
  establishment_numbers: string;
  notary: string;
  plot_square_meters: string;
  permit_no: string;
  building_permit_date: string;
  issuing_authority_details: string;
  regional_unit: string;
  pea_issue_date: string;
  pea_security_number: string;
  pea_protocol_number: string;
  pea_energy_category: string;
  pea_annual_energy_consumption: string;
  pea_annual_co2_emissions: string;
  band_value: string;
  land_use: string;
  arbitrary_constructions_description: string;
  document_of_anticipation: string;
}

// Store only serializable file metadata instead of File objects
export interface FileMeta {
  name: string;
  type: string;
  size: number;
  lastModified: number;
  // You can add a preview URL if needed, but handle it carefully
  preview?: string;
}

interface Data {
  total_files: number;
  successful_extractions: number;
  failed_extractions: number;
  formatted_data: FormattedData;
}
interface Question {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
  }[];
  selectedOption: string | null;
}
interface ViolationRecord {
  age: string;
  category: string;
  formId: number;
  otherViolation: boolean;
  showRemainingViolations: string | null;
  violations: string[];
}

interface AiExtractState {
  aiDataState?: TProjectData | null;
  ownerBaseData?: any[];
  projectId?: {} | undefined;
  subcategory?: any[];
  descriptionTask?: any[];
  description?: any[];
  horizontal?: {
    ydom: string;
    horizontal: string
  };
  multiFiles?: FileMeta[]; // Store file metadata instead of File objects
  aiInputData?: any;
  actionSelection?: any[];
  selectTemplate?: any[];
  projectIdCode?: string | null;
  violations?: ViolationRecord[]; // 👈 added here
  question?: ViolationRecord[]; // 👈 added here

}

const initialState: AiExtractState = {
  aiDataState: null,
  ownerBaseData: [],
  projectId: undefined,
  subcategory: [],
  descriptionTask: [],
  selectTemplate: [],
  multiFiles: [],
  description: [],
  horizontal: { ydom: "", horizontal: "" },
  aiInputData: null,
  actionSelection: [],
  projectIdCode: null,
  violations: [], // 👈 initialized
  question: [], // 👈 initialized
};

const aiExtractDataSlice = createSlice({
  name: "aiExtractData",
  initialState,
  reducers: {
    setAiExtractCatchData: (state, action) => {
      state.aiDataState = action.payload;
    },
    setAiExtractCatchWonerData: (state, action) => {
      state.ownerBaseData = action.payload;
    },
    setTheProjectId: (state, action) => {
      state.projectId = action.payload;
    },
    setActionSelectName: (state, action) => {
      state.actionSelection = action.payload;
    },
    setTheProjectCode: (state, action) => {
      state.projectIdCode = action.payload;
    },
    setMultipleSubcategory: (state, action) => {
      state.subcategory = action.payload;
    },
    setMultipleDescriptionTask: (state, action) => {
      state.descriptionTask = action.payload;
    },
    setMultipleDescription: (state, action) => {
      state.description = action.payload;
    },
    setMultipleHorizontalDescription: (state, action) => {
      state.horizontal = {
        ydom: action.payload.ydom,
        horizontal: action.payload.horizontal
      };
    },

    // Updated to handle FileMeta objects instead of File objects
    setImageFile: (state, action) => {
      state.multiFiles = action.payload;
    },
    setSelectTemplate: (state, action) => {
      state.selectTemplate = action.payload;
    },
    setAiExtreactAndInputData: (state, action) => {
      state.aiInputData = action.payload;
    },
    setViolations: (state, action) => {
      state.violations = action.payload
    },
    setQuestionsAnswer: (state, action) => {
      state.question = action.payload
    },
    resetAiExtractState: () => initialState,
  },
});

export const {
  setAiExtractCatchData,
  setAiExtractCatchWonerData,
  setTheProjectId,
  setMultipleSubcategory,
  setImageFile,
  setAiExtreactAndInputData,
  setActionSelectName,
  setTheProjectCode,
  setMultipleDescriptionTask,
  setMultipleDescription,
  setSelectTemplate,
  setMultipleHorizontalDescription,
  resetAiExtractState,
  setViolations,
  setQuestionsAnswer
} = aiExtractDataSlice.actions;

export default aiExtractDataSlice.reducer;