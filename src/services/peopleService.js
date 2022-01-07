import axios from 'axios';
import { apiEndPoint } from "../utlis/genric";
import { SNACKBAR_SHOW } from "../redux/actions/snackbarAction";
import { peopleAction } from "../redux/actions/peopleAction";

export const getPeople = ( dispatch, setIsLoading ) => { 
    axios.get(`${apiEndPoint}/people`,
    ).then(response => {
        console.log(response?.data)
        if(response?.status === 200){
            dispatch(peopleAction(response?.data?.results));
        }
        else{
            dispatch(SNACKBAR_SHOW({
                show: true,
                data: {
                severity: "error",
                duration: 3000,
                message: response?.data?.message,
                },
            }))
        }
    }).catch((err) => {
        console.log('error looged in genre', err);
         dispatch(SNACKBAR_SHOW({
            show: true,
            data: {
            severity: "error",
            duration: 3000,
            message: "Something went Wrong",
            },
        })
        )
    }).finally(() => {
        setIsLoading(false)
    })
}
