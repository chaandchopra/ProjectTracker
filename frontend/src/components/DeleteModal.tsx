import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
} from "@mui/material";
import { Formik, Form, FormikHelpers, Field } from "formik";

interface DeleteModalProps {
    open: boolean;
    projId: string;
    onClose: () => void;
    onConfirm: (values) => void;
}



export const DeleteModal: React.FC<DeleteModalProps> = ({
    open,
    projId,
    onClose,
    onConfirm,
}) => {


    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Delete</DialogTitle>
            <DialogContent className="flex flex-col p-4">
                Are you sure you want to delete {projId} ??
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>
                    Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary" onClick={()=>{onConfirm(projId); onClose();}}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
};
