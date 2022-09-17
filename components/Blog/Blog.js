import StyledBlog from "./Blog.styled";
import MakeBlog from "../common/CommonUsed";
import { Container, Button } from "../common/CommonUsed.styled";
import { BlogData } from "../../data/BlogData";

const Blog = () => {
    return (
        <StyledBlog>
            <Container>
                <h2>Блог</h2>
                <MakeBlog data={BlogData}/>
                <Button>
                    Больше
                </Button>
            </Container>
        </StyledBlog>
    );
}
 
export default Blog;