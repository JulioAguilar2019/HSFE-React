import { People } from '@/DATA';
import { addPeople } from '@/redux/slices';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PeopleTable } from './components';



export const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addPeople(People))
    }, [])

    return (
        <PeopleTable />
    )
}