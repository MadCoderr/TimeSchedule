// libs
import React, { useState, useContext } from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";

// components
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/Button";

// context
import UserContext from "../context/UserAuth";

// collection
import { UserCollection } from "../util/collections";

function StudentSignUp(props) {
  const { signUp } = useContext(UserContext);

  const [formData, setFormData] = useState(null);

  const handleSubmit = () => {
    if (formData.email !== "" && formData.password !== "") {
      signUp(formData.email, formData.password)
        .then((userCredential) => {
          console.log("yaya sing up sccessfullly");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      console.log("credentail empty");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppTextInput
        autoCapitalize="words"
        autoCorrect={false}
        icon="account"
        placeholder="Student Name"
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
        value={formData?.name || ""}
      />

      <AppTextInput
        autoCapitalize="words"
        autoCorrect={false}
        icon="school"
        placeholder="Department"
        onChange={(e) =>
          setFormData({
            ...formData,
            department: e.target.value,
          })
        }
        value={formData?.department || ""}
      />

      <AppTextInput
        autoCapitalize="words"
        autoCorrect={false}
        icon="numeric"
        placeholder="Registration No"
        onChange={(e) =>
          setFormData({
            ...formData,
            regNumber: e.target.value,
          })
        }
        value={formData?.regNumber || ""}
      />

      <AppTextInput
        autoCapitalize="words"
        autoCorrect={false}
        icon="book"
        placeholder="Semester"
        onChange={(e) =>
          setFormData({
            ...formData,
            semester: e.target.value,
          })
        }
        value={formData?.semester || ""}
      />

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        placeholder="Email"
        textContentType="emailAddress"
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value,
          })
        }
        value={formData?.email || ""}
      />

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        secureTextEntry
        placeholder="Password"
        textContentType="passwrod"
        onChange={(e) =>
          setFormData({
            ...formData,
            password: e.target.value,
          })
        }
        value={formData?.password || ""}
      />

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        secureTextEntry
        placeholder="Confirm password"
        textContentType="passwrod"
        onChange={(e) =>
          setFormData({
            ...formData,
            confirmPassword: e.target.value,
          })
        }
        value={formData?.confirmPassword || ""}
      />

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="phone-classic"
        placeholder="Phone Number"
        textContentType="passwrod"
        keyboardType="numeric"
        onChange={(e) =>
          setFormData({
            ...formData,
            phone: e.target.value,
          })
        }
        value={formData?.phone || ""}
      />

      <AppButton title="SignUp" onPress={handleSubmit} />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 30,
    marginRight:15,
    marginLeft:15,
  },
});

export default StudentSignUp;
