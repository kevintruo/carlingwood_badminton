import * as React from "react";
import Section from "../../components/Section";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

export default function Registration() {
  const [inProgress, setInProgress] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string | null>("");
  const [name, setName] = React.useState<string | null>("");
  const webAppUrl =
    "https://script.google.com/macros/s/AKfycbzOTJFMhpCNMIq6P4RHpMIrwWPn4zs1cIxSSZInJ7UT-2aOTe04oMrobzN6CF1yF0ks/exec";

  const submitForm = async () => {
    if (!email || !name) return;
    setInProgress(true);
    let body = new FormData();
    body.append("Email", email);
    body.append("Name", name);

    await axios
      .post(webAppUrl, body)
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
      .finally(() => setInProgress(false));
  };

  return (
    <Section>
      <div className='flex flex-row w-screen justify-between p-5'>
        <div className='flex flex-col gap-3'>
          <p className='text-3xl font-bold text-black  dark:text-white dark:bg-black'>
            Registration
          </p>
          <TextField
            label='Email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField label='Name' value={name} onChange={(e) => setName(e.target.value)} />
          <Button onClick={submitForm} variant='contained' disabled={inProgress}>
            {inProgress ? <CircularProgress size={24} /> : "Submit"}
          </Button>
        </div>
      </div>
    </Section>
  );
}
