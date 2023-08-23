declare module '@codersrank/work-experience' {
    // Define any types or interfaces related to the module here
    // For example:
    interface Work {
      name: string;
      value: number;
    }
  
    // Add other declarations as needed
  }

  declare namespace JSX {
    interface IntrinsicElements {
      "codersrank-work-experience": any;
    }
  }