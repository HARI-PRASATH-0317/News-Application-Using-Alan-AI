import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
    container: {
        padding: '0 5%',
        width: '100%',
        margin: 0,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10%',
        width: '100%',
        height: '45vh',
        borderRadius: 10,
        color: 'white'
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    }
});

export default styles;
