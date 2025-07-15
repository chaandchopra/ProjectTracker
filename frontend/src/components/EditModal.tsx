import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { Formik, Form, FormikHelpers, Field } from "formik";
import * as Yup from "yup";



// Define the shape of the data being edited

// Define component props
interface EditModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (values) => void;
  initialData: any;
  type: string | boolean;
}



export const EditModal: React.FC<EditModalProps> = ({
  open,
  onClose,
  onSave,
  initialData,
  type
}) => {


  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit {type}</DialogTitle>

      {type == "sprintNotes" ?
        <SprintNotesFormik
          onClose={onClose}
          onSave={onSave}
          initialData={initialData} /> : null}
      {type == "projectInfo" ?
        <ProjInfoFormik
          onClose={onClose}
          onSave={onSave}
          initialData={initialData} /> : null}
      {type == "projectProgress" ?
        <ProjProgressFormik
          onClose={onClose}
          onSave={onSave}
          initialData={initialData} /> : null}
    </Dialog>
  );
};

const ProjInfoFormik = ({ onClose, onSave, initialData }) => {
  return (
    <>
      <Formik
        initialValues={initialData}
        onSubmit={(values) => {
          const updated = {
            ...initialData,
            technology: values.technology,
            business_function: values.business_function,
            initiation_date: values.initiation_date,
            sprint_start: values.sprint_start
          }; // Merge updated field
          onSave(updated);
          onClose();
        }}
      >
        {({
          values,
          handleChange,
          isSubmitting,
        }) => (
          <Form>
            <DialogContent className="flex flex-col gap-4">
              <TextField
                label="Technology"
                name="technology"
                value={values.technology}
                onChange={handleChange}
                fullWidth
                multiline
              />
              <TextField
                label="Business Function"
                name="business_function"
                value={values.business_function}
                onChange={handleChange}
                fullWidth
                multiline
              />
              <TextField
                label="Initiation Date"
                name="initiation_date"
                value={values.initiation_date}
                onChange={handleChange}
                fullWidth
                multiline
              />
              <TextField
                label="Sprint Start"
                name="sprint_start"
                value={values.sprint_start}
                onChange={handleChange}
                fullWidth
                multiline
              />
            </DialogContent>

            <DialogActions>
              <Button onClick={onClose} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                Save
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </>
  )
}

const ProjProgressFormik = ({ onClose, onSave, initialData }) => {
  return (
    <>
      <Formik
        initialValues={initialData}
        onSubmit={(values) => {
          const updated = {
            ...initialData,
            concept: values.concept,
            initial: values.initial,
            sprint: values.sprint
          }; // Merge updated field
          onSave(updated);
          onClose();
        }}
      >
        {({
          values,
          handleChange,
          isSubmitting,
        }) => (
          <Form>map
            <DialogContent className="flex flex-col gap-4">
              <TextField
                label={"Conceptualize"}
                name="concept"
                value={values.concept}
                onChange={handleChange}
                fullWidth
                multiline
              />
              <TextField
                label={"Initialize"}
                name={"initial"}
                value={values.initial}
                onChange={handleChange}
                fullWidth
                multiline
              />
              {values.sprint.map((val, index) => {
                return (
                  <TextField
                    label={`Sprint ${index+1}`}
                    name={`sprint[${index}]`}
                    value={val}
                    onChange={handleChange}
                    fullWidth
                    multiline
                  />)
              })}
            </DialogContent>

            <DialogActions>
              <Button onClick={onClose} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                Save
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </>
  )
}

const SprintNotesFormik = ({ onClose, onSave, initialData }) => {
  return (
    <>
      <Formik
        initialValues={initialData}
        onSubmit={(values) => {
          const updated = { ...initialData, sprint_notes: values.sprint_notes }; // Merge updated field
          onSave(updated);
          onClose();
        }}
      >
        {({
          values,
          handleChange,
          isSubmitting,
        }) => (
          <Form>
            <DialogContent className="flex flex-col gap-4">
              <TextField
                label="Sprint Notes"
                name="sprint_notes"
                value={values.sprint_notes}
                onChange={handleChange}
                fullWidth
                multiline
              />
            </DialogContent>

            <DialogActions>
              <Button onClick={onClose} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                Save
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </>
  )
}

// export default EditModal;
