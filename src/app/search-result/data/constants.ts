export const BIZ_TYPES = [
    {
        label: 'ALL',
        value: null
    },
    {
        label: 'IVF Clinics',
        value: 'CLINIC'
    },
    {
        label: 'Agencies',
        value: 'AGENCY'
    },
    {
        label: 'Egg+Sperm Banks',
        value: 'BANK'
    },
    {
        label: 'Egg Donors',
        value: 'EGG'
    },
    {
        label: 'Surrogates',
        value: 'SURROGATE'
    },
    {
        label: 'Attorneys',
        value: 'ATTORNEY'
    } 
];

export const STATES = [
    {
        label: 'NJ',
        value: 'NJ'
    },
    {
        label: 'NY',
        value: 'NY'
    },
    {
        label: 'CT',
        value: 'CT'
    },
    {
        label: 'VT',
        value: 'VT'
    },
    {
        label: 'MA',
        value: 'MA'
    },
    {
        label: 'CA',
        value: 'CA'
    },
    {
        label: 'TX',
        value: 'TX'
    },
    {
        label: 'FL',
        value: 'FL'
    },
    {
        label: 'PA',
        value: 'PA'
    },
    {
        label: 'MI',
        value: 'MI'
    },
    {
        label: 'Canada',
        value: 'Canana'
    }
];

export const defaultFilter = {
    keyword: null,
    zipcode: null,
    category: null, 
    page: 1,
    sort:null,
    perPage: 10,
    languages:{
      spanish: false,
      chinese: false,
      french: false
    },
    cost:{
      tier1: false,
      tier2: false,
      tier3: false
    },
    reviews: {
      few: false,
      medium: false,
      massive: false
    },
    locations:{
      NJ: false,
      NY: false,
      CT: false,
      VT: false,
      MA: false,
      CA: false,
      TX: false,
      FL: false,
      PA: false,
      MI: false,
      Canada: false
    }
  }