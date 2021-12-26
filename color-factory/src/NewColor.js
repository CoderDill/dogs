function NewColor() {
  return (
    <form>
      <label>
        New Color:
        <input type="text" name="colorName" />
      </label>
      <label>
        Color:
        <input type="color" name="color"></input>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NewColor;
