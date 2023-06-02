import dayjs from 'dayjs';
import {
  AvailAbilityStatus,
  JobDesignation,
  Personnel,
} from '../../../Utils/Types';
import { createSlice } from '@reduxjs/toolkit';
import { personnelApiSlice } from './PersonnelApiSlice';

interface IinitialState {
  personnels: Personnel[];
}

const initialState: IinitialState = {
  personnels: [
    {
      personnelId: 'afda04cc',
      department: 'management',
      firstName: 'Katie ',
      lastName: 'Myers',
      middleName: 'Medina',
      dateOfBirth: dayjs(new Date()),
      dateOfHire: dayjs(new Date('12-5-22')),
      profilePictureUrl: 'http://usuununic.in/fuget',
      phone: '(432) 614-9748',
      email: 'miofudud@vidwakva.tv',
      address: '690 Bacog Square',
      city: 'Ifeetulu',
      state: 'Bebbangurg',
      maritalStatus: 'Single',
      gender: 'male',
      additionalInfo: 'Anything extra',
      guarantor: {
        name: 'Jerry Guzman',
        relationshipWithStaff: 'Father',
        phone: '(285) 770-5744',
        email: 'futocuj@coozo.co',
        address: '491 Unde Square',
      },
      jobDesignation: JobDesignation.MANAGER,
      availabilityStatus: AvailAbilityStatus.ON_DUTY,
      monthlySalary: 32000,
    },
    {
      personnelId: '28da2562',
      firstName: 'Becker',
      department: 'floor worker',
      lastName: 'Barnett',
      middleName: 'Reese',
      dateOfBirth: dayjs(new Date()),
      dateOfHire: dayjs(new Date('25-7-19')),
      profilePictureUrl: 'http://inudote.ky/vilka',
      phone: '(850) 866-4126',
      email: 'fel@hecurhel.nf',
      address: '756 Vejo Glen',
      city: 'Gosazi',
      state: 'Wessez',
      maritalStatus: 'Married',
      gender: 'Female',
      additionalInfo: 'Anything extra goes here',
      guarantor: {
        name: 'Devin Lowe',
        relationshipWithStaff: 'Father',
        phone: '(684) 566-9571',
        email: 'sunkedif@af.pl',
        address: '448 Arigah Glene',
      },
      jobDesignation: JobDesignation.FLOOR_WORKER,
      availabilityStatus: AvailAbilityStatus.ON_DUTY,
      monthlySalary: 15000,
    },
    {
      personnelId: '530e8a71',
      firstName: 'Rose',
      lastName: 'Barnett',
      department: 'floor worker',
      middleName: 'Riley',
      dateOfBirth: dayjs(new Date()),
      dateOfHire: dayjs(new Date('12-5-10')),
      profilePictureUrl: 'http://hicus.hn/rotgo',
      phone: '(546) 242-4737',
      email: 'gil@dukre.pf',
      address: '416 Likaj Road',
      city: 'Wevdana',
      state: 'Merianoz',
      maritalStatus: 'Single',
      gender: 'Female',
      additionalInfo: 'Anything extra for Rose goes here',
      guarantor: {
        name: 'Jesse Nash',
        relationshipWithStaff: 'Father',
        phone: '(734) 742-4771',
        email: 'wahihi@ehgijun.am',
        address: '1990 Zoag Trail',
      },
      jobDesignation: JobDesignation.FLOOR_WORKER,
      availabilityStatus: AvailAbilityStatus.ON_DUTY,
      monthlySalary: 15000,
    },
  ],
};

export const personnelSlice = createSlice({
  name: 'personnel',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      personnelApiSlice.endpoints.getPersonnels.matchFulfilled,
      (state, action) => {
        state.personnels = action.payload;
      },
    );
  },
});

export default personnelSlice.reducer;
