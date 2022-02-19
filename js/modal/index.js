const fruits = [
  { id: 1, title: 'Apple', price: 20 },
  { id: 2, title: 'Orange', price: 30 },
  { id: 3, title: 'Mango', price: 40 },
];

const modal = $.modal({
  title: 'Max Modal',
  closable: true,
  content: `
    <h4>Modal is working</h4>
    <p>lorem ipsum dolor sit.</p>
  `,
  width: `400px`,

  footerButtons: [
    {
      text: 'Ok',
      type: 'success',
      handler() {
        console.log('success btn click');
        modal.close();
      },
    },
    {
      text: 'Cancel',
      type: 'danger',
      handler() {
        console.log('danger btn click');
        modal.close();
      },
    },
  ],
});
