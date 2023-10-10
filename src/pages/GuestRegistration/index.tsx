import * as React from "react";
import axios from "axios";
import { Moment } from "moment";
import Section from "../../components/Section";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import SkillLevelSelect from "../../components/SkillLevelSelect";
import Typography from "@mui/material/Typography";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";

export default function GuestRegistration() {
  const [inProgress, setInProgress] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string | null>("");
  const [firstName, setFirstName] = React.useState<string | null>("");
  const [lastName, setLastName] = React.useState<string | null>("");
  const [phone, setPhone] = React.useState<string | null>("");
  const [isOver18, setIsOver18] = React.useState<boolean>(false);
  const [skillLevel, setSkillLevel] = React.useState<string | null>(null);
  const [playDate, setPlayDate] = React.useState<Moment | null>(moment());
  const webAppUrl =
    "https://script.google.com/macros/s/AKfycbyz-CotGaSRru0c6QdPcELrELMSle3efnvDnj4vBolhEBPT7fx-F-HKywf_bHaX6Jkw/exec";

  const submitForm = async () => {
    if (!email || !firstName || !lastName || !phone || !isOver18 || !skillLevel || !playDate)
      return;
    setInProgress(true);
    let body = new FormData();
    body.append("First Name", firstName);
    body.append("Last Name", lastName);
    body.append("Email", email);
    body.append("Phone Number", phone);
    body.append("Is Over 18", isOver18 ? "Yes" : "No");
    body.append("Skill Level", skillLevel);
    body.append("Requested Play Date", playDate.format("MM/DD/yyyy"));

    await axios
      .post(webAppUrl, body)
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
      .finally(() => setInProgress(false));
  };

  return (
    <Section id='guest_registration' className='gap-2'>
      <p className='text-3xl font-bold text-black  dark:text-white dark:bg-black'>
        Guest Registration
      </p>
      <TextField
        label='First Name'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        error={!firstName}
        sx={{ maxWidth: 300 }}
      />
      <TextField
        label='Last Name'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        error={!lastName}
        sx={{ maxWidth: 300 }}
      />
      <TextField
        label='Email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        error={!email}
        sx={{ maxWidth: 300 }}
      />
      <TextField
        label='Phone'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        error={!phone}
        sx={{ maxWidth: 300, mb: 1 }}
      />
      <SkillLevelSelect
        value={skillLevel ?? ""}
        updateValue={(e) => setSkillLevel(e.target.value as string)}
      />
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          label='Requested Play Date *'
          value={playDate}
          onChange={(newValue) => setPlayDate(newValue)}
          minDate={moment()}
          sx={{ mt: 1 }}
        />
      </LocalizationProvider>
      <FormControlLabel
        control={<Switch checked={isOver18} onChange={(e) => setIsOver18(e.target.checked)} />}
        label={
          <Typography color={!isOver18 ? "error" : "inherit"}>I am 18+ years old *</Typography>
        }
      />
      <Button onClick={submitForm} variant='contained' disabled={inProgress} sx={{ maxWidth: 100 }}>
        {inProgress ? <CircularProgress size={24} /> : "Submit"}
      </Button>
    </Section>
  );
}
