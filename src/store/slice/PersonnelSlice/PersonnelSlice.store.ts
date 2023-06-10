import { Gender, JobDesignation, Personnel } from '../../../Utils/Types';
import { createSlice } from '@reduxjs/toolkit';
import { personnelApiSlice } from './PersonnelApiSlice';

interface IinitialState {
  personnels: Personnel[];
}

const initialState: IinitialState = {
  personnels: [
    {
      personnelId: 'afda04cc',
      firstName: 'Katie ',
      lastName: 'Myers',
      middleName: 'Medina',
      dateOfBirth: '2019-03-06T08:00:00+08:00',
      dateOfHire: '2019-03-06T08:00:00+08:00',
      profilePicture: 'http://usuununic.in/fuget',
      phone: '(432) 614-9748',
      email: 'miofudud@vidwakva.tv',
      address: '690 Bacog Square',
      city: 'Ifeetulu',
      state: 'Bebbangurg',
      gender: Gender.MALE,
      additionalInfo: 'Anything extra',
      guarantorName: 'Jerry Guzman',
      relationshipWithStaff: 'Father',
      guarantorPhone: '(285) 770-5744',
      guarantorEmail: 'futocuj@coozo.co',
      guarantorAddress: '491 Unde Square',
      jobDesignation: JobDesignation.MANAGER,
      monthlySalary: 32000,
    },
    {
      personnelId: '28da2562',
      firstName: 'Becker',
      lastName: 'Barnett',
      middleName: 'Reese',
      dateOfBirth: '2019-03-06T08:00:00+08:00',
      dateOfHire: '2019-03-06T08:00:00+08:00',
      profilePicture: 'http://inudote.ky/vilka',
      phone: '(850) 866-4126',
      email: 'fel@hecurhel.nf',
      address: '756 Vejo Glen',
      city: 'Gosazi',
      state: 'Wessez',
      gender: Gender.FEMALE,
      additionalInfo: 'Anything extra goes here',
      guarantorName: 'Devin Lowe',
      relationshipWithStaff: 'Father',
      guarantorPhone: '(684) 566-9571',
      guarantorEmail: 'sunkedif@af.pl',
      guarantorAddress: '448 Arigah Glene',
      jobDesignation: JobDesignation.FLOOR_WORKER,
      monthlySalary: 15000,
    },
  ],
};

export const personnelSlice = createSlice({
  name: 'personnel',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addMatcher(
  //     personnelApiSlice.endpoints.getPersonnels.matchFulfilled,
  //     (state, action) => {
  //       state.personnels = action.payload;
  //     },
  //   );
  // },
});

export default personnelSlice.reducer;
