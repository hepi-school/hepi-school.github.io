import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { InstagramEmbed } from 'react-social-media-embed';
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface SocialMiddleBlockProps {
  title: string;
  content: string;
  count: number;
}

// IGAAWrcJGffBdBZAE5HTjdpZAUNTQU1peDgta3hSVlVmMDRRSjRCN3V2WXRiTGl5RDctU0NVYVBCdmg2QnBBSHN3M1otUVFhNzU3WkFGczQtU2M4MFlpMmc0cWl3WElFN2VfRWxfVThaVXlzOVZAlRDRPa2tUWWlyeHhVckMwYUtOVQZDZD

const SocialMiddleBlock = ({ title, content, count }: SocialMiddleBlockProps) => {
  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{title}</h6>
              <Content>
                <InstagramEmbed url="https://www.instagram.com/p/DOaaOvZAAsN/?hl=en&img_index=1" width={328} />
              </Content>
              
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(SocialMiddleBlock);
