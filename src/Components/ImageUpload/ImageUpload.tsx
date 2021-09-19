import { useRef } from "react";
import Button from "../UI/Button/Button";
import Container from "../UI/Container/Container";
import classes from './ImageUpload.module.scss';

const ImageUpload = () => {
  const fileSelect = useRef(null);

  async function handleImageUpload() {
    if (fileSelect) {
      // @ts-ignore
      fileSelect.current.click();
    }
  }

  const handleFiles = (files: any) => {
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
    }
  }

  return (
    <Container
      vBox
      alignItemsCenter
      justifyContentCenter
      className={classes.ImageUpload}
    >
      <Button
        primary
        onClick={handleImageUpload}
      >
        Browse
      </Button>
      <input
        className={classes.InputFile}
        ref={fileSelect}
        type="file"
        accept="image/*"
        onChange={(e) => handleFiles(e.target.files)}
      />
    </Container>
  );
}
export default ImageUpload;