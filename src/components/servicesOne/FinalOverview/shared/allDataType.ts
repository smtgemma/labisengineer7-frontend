export interface ProjectResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    serviceId: string;
    subServices: string[];
    project_description: string;
    status: string;
    createdById: string | null;
    projectCode: string;
    cadastralCode: string | null;

    // owners: {
    //   firstName: string;
    //   lastName: string;
    //   fatherName: string;
    //   motherName: string;
    //   birthDate: string;
    //   birthPlace: string;
    //   address: string;
    //   addressNumber: string;
    //   postalCode: string;
    //   city: string;
    //   afm: string;
    //   idNumber: string;
    //   phone: string;
    //   email: string;
    // }[];

    owners: any[]

    engineers: any[];

    subCategories: {
      [key: string]: string[];
    };

    uploadedDocuments: string[];

    descrptionTasks: {
      [key: string]: {
        id: string;
        description: string;
      }[];
    };

    technical_description: string;
    createdAt: string;
    updatedAt: string;

    // keep flexibility for other fields you don't use often
    [key: string]: any;
  };
}
