import ContactForm from "@/components/ContactForm";
import ContactGroup from "@/components/ContactGroup";
import Layout from "@/components/Layout";
import { Text, Title } from "@mantine/core";
import { NextPage } from "next";

const Iletisim: NextPage = () => {
  return (
    <Layout>
      <Title order={2} size={32} my="xl">
        İletişim
      </Title>

      <Text size="xl" my="xl">
        İlgilendiğiniz bir turla ilgili detaylı bilgi almak ve rezervasyon
        yapmak için bize ulaşın.
      </Text>

      <ContactGroup />

      <ContactForm />
    </Layout>
  );
};

export default Iletisim;
