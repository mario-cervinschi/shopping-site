import { Container } from "@mui/material";
import { UserPage } from "../User/UserPage"; 
import { User } from "../../types/home/types";

// Mock user pentru testare
const mockUser: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  phoneNumber: '0034019571',
  profileImage: "https://picsum.photos/seed/user/200/200",
};

const mockOrders = ["Order #1 - 3 items", "Order #2 - 1 item"];
const mockReviews = ["Review for Product A: 5 stars", "Review for Product B: 4 stars"];
const mockReturns = ["Return #1 - Product C"];
const mockWarranties = ["Warranty #1 - Product D"];
const mockAbout = "This is a mock user account for testing purposes.";

export const TestingUserPage: React.FC = () => {
  return (
    <Container>
      <UserPage
        user={mockUser}
        orders={mockOrders}
        reviews={mockReviews}
        returns={mockReturns}
        warranties={mockWarranties}
        about={mockAbout}
      />
    </Container>
  );
};