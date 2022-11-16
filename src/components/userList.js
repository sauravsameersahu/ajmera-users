import React from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserList, postUserDetails } from "../redux/user/userActions"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import { AgGridReact } from "ag-grid-react";
import { Button, Card, CardActions, CardContent, LinearProgress, TextField, Typography } from "@mui/material";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

const UserList = () => {
    const [rowData, setRowData] = useState([])
    const [isAddUser, setIsAddUser] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: ""
    })
    const [columnDefs] = useState([
        {
            field: 'avatar',
            headerName: "",
            width: 50,
            cellRenderer: function (params) {
                return <img
                    src={`${params.value}`}
                    alt={`Img_${params.data.first_name}_${params.data.last_name}`}
                    loading="lazy"
                    style={{ width: "60px", height: "100%" }}
                />
            }
        },
        { field: 'id', type: "numericColumn", headerName: "Id" },
        {
            field: 'first_name',
            headerName: "Name",
            cellRenderer: function (params) {
                return <>{params.data.first_name} {params.data.last_name}</>
            }
        },
        { field: 'email', headerName: "E-mail" }
    ])

    const userList = useSelector(state => state.userListDataReducer.userData)
    const postUserResponse = useSelector(state => state.userListDataReducer.postUserResponse)

    const dispatch = useDispatch()
    useEffect(() => {
        if (!isAddUser) {
            dispatch(getUserList())
        }
    }, [isAddUser])

    useEffect(() => {
        if (userList) {
            setRowData(userList?.data)
            setIsLoading(false)
        }
    }, [userList])

    useEffect(() => {
        if (postUserResponse) {
            setIsLoading(false)
        }
    }, [postUserResponse])

    const validateForm = () => {
        const values = Object.values(formData)
        if (values.includes("")) {
            return false
        }
        else return true
    }

    const addUser = () => {
        if (validateForm()) {
            const params = formData
            dispatch(postUserDetails(params))
            setIsLoading(true)
            setFormData({
                first_name: "",
                last_name: "",
                email: ""
            })
        }
        else {
            alert("Please enter all required fields")
        }
    }

    const inputHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            {/* <div style={{ background: "black", color: "white", height: "100vh" }}> */}
                {isLoading &&
                    <LinearProgress />
                }
                {
                    isAddUser ?
                        <>
                            <div style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%,-50%)"
                            }} >
                                < Card variant="outlined" >
                                    <CardContent>
                                        <Typography align="center" sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
                                            Add User Details
                                        </Typography>
                                        <TextField size="small" id="outlined-basic" label="First Name" variant="outlined" name="first_name" required onChange={inputHandler} />
                                        <br />
                                        <br />
                                        <TextField size="small" id="outlined-basic" label="Last Name" variant="outlined" name="last_name" required onChange={inputHandler} />
                                        <br />
                                        <br />
                                        <TextField size="small" id="outlined-basic" label="Email" variant="outlined" name="email" required onChange={inputHandler} />
                                        <br />
                                    </CardContent>
                                    <CardActions>
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                                            <Button color="info" variant="contained" onClick={addUser}>ADD USER</Button> &nbsp;
                                        </div>
                                    </CardActions>
                                </Card>
                                <br />
                                <br />
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                                    <Button color="info" variant="contained" onClick={() => { setIsAddUser(false) }}>LOAD USER LIST</Button> &nbsp;
                                </div>
                            </div >
                        </>
                        :
                        <>
                            <h3 style={{ display: "flex", justifyContent: "center" }}>User List</h3>
                            {rowData?.length > 0 &&
                                <div className="ag-theme-balham">
                                    <AgGridReact
                                        rowData={rowData}
                                        columnDefs={columnDefs}
                                        domLayout="autoHeight"
                                        defaultColDef={{
                                            flex: 1,
                                            suppressMenu: true,
                                            sortable: true,
                                            autoHeight: true,
                                            wrapText: true,
                                        }}
                                    />
                                </div>
                            }
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: 10 }}>
                                <Button color="info" variant="contained" onClick={() => { setIsAddUser(true) }}>ADD USER</Button> &nbsp;
                                {/* <Button color="warning" variant="contained">CHANGE THEME</Button> */}
                            </div>
                        </>
                }
            {/* </div> */}
        </>
    )
}

export default UserList