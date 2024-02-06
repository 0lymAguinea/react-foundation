function CVPreview({ inputValue }) {
  return (
    <>
      <input type="text" value={inputValue.firstName} readOnly />
      <input type="text" value={inputValue.lastName} readOnly />
      <input type="text" value={inputValue.emailAddress} readOnly />
      <input type="text" value={inputValue.mobileNumber} readOnly />
    </>
  );
}
export default CVPreview;
