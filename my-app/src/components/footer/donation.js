import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DonationLogo from '../../images/donation.jpeg'
export default function Donation() {
    return (
        <Card elevation={5} sx={{ width: 350, mt: 1, mb: 1 }}>
            <CardMedia
                component="img"
                height="140"
                image={DonationLogo}
                alt="green iguana"
            />
            <CardContent >
                <Typography gutterBottom variant="h5" component="div" color="primary.main">
                    Donation
                </Typography>
                <Typography variant="body2" color="primary.main">
                    We are raising funds for the NHS Charities COVID-19. The money raise will be used to support front-line NHS staff and volunteers working night and day to protect us against COVID-19
                </Typography>
            </CardContent>
            <CardActions>
                {/* <Button size="small" >Share</Button> */}
                <Button size="small" href='https://www.justgiving.com/crowdfunding/bccuk-dharmacentre'>Learn More</Button>
            </CardActions>
        </Card>
    );
}