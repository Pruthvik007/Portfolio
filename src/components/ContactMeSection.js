import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./common/FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
    }
  }, [response]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      comment: "",
    },
    onSubmit: (values) => {
      submit("", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      comment: Yup.string()
        .required("Required")
        .min(25, "Must be at least 25 characters"),
      email: Yup.string().required("Required").email("Invalid email address"),
    }),
  });

  return (
    <FullScreenSection
      id="contactme-section"
      isDarkBackground
      backgroundColor="#512DA8"
      py={8}
      spacing={8}
    >
      <VStack w="1024px" p={1} alignItems="flex-start">
        <Heading as="h1">Contact me</Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.errors.firstName && formik.touched.firstName}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.errors.firstName && formik.touched.firstName && (
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={formik.errors.email && formik.touched.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.errors.email && formik.touched.email && (
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={formik.errors.comment && formik.touched.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                {formik.errors.comment && formik.touched.comment && (
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                )}
              </FormControl>
              <Button
                disabled
                isLoading={isLoading}
                type="submit"
                colorScheme="purple"
                width="full"
              >
                Submit (In Development)
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
