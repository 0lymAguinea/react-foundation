function CVPreview({ inputValue }) {
  return (
    <>
      <input type="text" value={inputValue.firstName} readOnly disabled />
      <input type="text" value={inputValue.lastName} readOnly />
      <input type="text" value={inputValue.emailAddress} readOnly />
      <input type="text" value={inputValue.mobileNumber} readOnly />

      <input type="text" value={inputValue.universityName} readOnly />
      <input type="text" value={inputValue.graduateYear} readOnly />
      <input type="text" value={inputValue.degreeName} readOnly />
      <input type="text" value={inputValue.majorName} readOnly />

      <input type="text" value={inputValue.companyName} readOnly />
      <input type="text" value={inputValue.position} readOnly />
      <input type="text" value={inputValue.achievements} readOnly />
      <input type="text" value={inputValue.workDurationFrom} readOnly />
      <input type="text" value={inputValue.workDurationUntil} readOnly />
    </>
  );
}
export default CVPreview;
