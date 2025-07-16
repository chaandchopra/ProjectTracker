import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { Formik, Form } from "formik";

interface AddModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (values) => void;
  initialData: any;
}

export const AddModal: React.FC<AddModalProps> = ({
  open,
  onClose,
  onSave,
  initialData
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add Project</DialogTitle>
      <AddProjectFormik onClose={onClose} onSave={onSave} initialData={initialData} />
    </Dialog>
  );
};

const AddProjectFormik = ({ onClose, onSave, initialData }) => {
  return (
    <>
      <Formik
        initialValues={initialData}
        onSubmit={(values) => {
          onSave(values);
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
                label="Project ID"
                name="proj_id"
                value={values.proj_id}
                onChange={handleChange}
                fullWidth
                multiline
              />
              <TextField
                label="Project Name"
                name="proj_name"
                value={values.proj_name}
                onChange={handleChange}
                fullWidth
                multiline
              />
              <TextField
                label="Conceptualize"
                name="concept"
                value={values.concept}
                onChange={handleChange}
                fullWidth
                multiline
              />
              <TextField
                label="Initialize"
                name="initial"
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