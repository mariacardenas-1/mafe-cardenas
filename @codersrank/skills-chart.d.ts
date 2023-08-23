declare module '@codersrank/skills-chart' {
    // Define any types or interfaces related to the module here
    // For example:
    interface Skill {
      name: string;
      value: number;
    }
  
    // Add other declarations as needed
  }

  declare namespace JSX {
    interface IntrinsicElements {
      "codersrank-skills-chart": any;
    }
  }