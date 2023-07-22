import { Typography, Container, ListItem, List } from "@mui/material";

export default function HomePageSubsection() {
  return (
    <Container
      sx={{
        mt: 6,
      }}
    >
      <Typography variant="h5">Why Rent with Us?</Typography>
      <List>
        <ListItem>
          <Typography>
            <strong>Diverse Property Options:</strong> Our curated collection
            offers a wide range of rental houses, each with its own unique
            charm. Explore a variety of styles, sizes, and locations, and find a
            property that truly feels like home.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>Easy Search Filters:</strong> With our user-friendly search
            filters, finding the ideal rental house has never been simpler.
            Filter by price, bedroom count, bathroom count, housing type,
            pet-friendly options, and more, all tailored to meet your specific
            requirements.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>Expert Guidance:</strong> Our experienced team is here to
            assist you throughout the rental process. From the initial search to
            lease signing, we provide expert guidance and support to ensure a
            smooth and hassle-free experience.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>Detailed Property Information:</strong> Each rental house
            listing comes with comprehensive details, high-quality images, and
            accurate property descriptions. We believe in complete transparency,
            allowing you to make an informed decision.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>Prompt Customer Service:</strong> Your satisfaction is our
            priority. We are dedicated to providing prompt customer service,
            answering your queries, and addressing any concerns you may have.
          </Typography>
        </ListItem>
      </List>
      <Typography variant="h5">Contact Us </Typography>
      <Typography>
        For any inquiries or to schedule a viewing, please don't hesitate to
        reach out to our friendly team. We look forward to helping you find the
        rental house of your dreams and making your living experience a
        memorable one.
      </Typography>
    </Container>
  );
}
