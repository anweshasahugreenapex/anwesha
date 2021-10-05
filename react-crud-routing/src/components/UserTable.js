import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import {
  Button,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "90%",
    // margin: "50px 0 0 50px",
    marginLeft: "200px",
  },
  thead: {
    "& > *": {
      background: "#060b26",
      color: "#ffffff",
      fontSize: "20px",
    },
  },
}));

//function to show the table
const UserTable = (props) => {
  const classes = useStyles();

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>ID</TableCell>
          <TableCell>FirstName</TableCell>
          <TableCell>LastName</TableCell>
          <TableCell>age</TableCell>
          <TableCell>email</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.users.length > 0 ? ( //if length of user is greater than 0 then show the data
          props.users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.fname}</TableCell>
              <TableCell>{user.lname}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button
                  color="primary"
                  varient="contained"
                  className="button muted-button"
                  onClick={() => {
                    props.editRow(user);
                  }}
                >
                  <AiIcons.AiOutlineEdit style={{ fontSize: "30px" }} />
                </Button>
                <Button
                  color="secondary"
                  varient="contained"
                  className="button muted-button"
                  onClick={() => props.deleteUser(user.id)}
                >
                  <AiIcons.AiFillDelete style={{ fontSize: "30px" }} />
                </Button>
                <Button
                  color="secondary"
                  varient="contained"
                  className="button muted-button"
                  onClick={() => props.viewUser(user)}
                >
                  <GrIcons.GrView style={{ fontSize: "30px" }} />
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          //if users array is empty show no user
          <TableRow>
            <TableCell colSpan={6}>No users</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default UserTable;
