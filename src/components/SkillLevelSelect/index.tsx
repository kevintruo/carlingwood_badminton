import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Tooltip from "@mui/material/Tooltip";

export default function SkillLevelSelect({
  value,
  updateValue,
}: {
  value: string;
  updateValue: (event: SelectChangeEvent) => void;
}) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth required error={!value}>
        <InputLabel id='skill-level-select-label'>Skill Level</InputLabel>
        <Select
          labelId='skill-level-select-label'
          id='demo-skill-level-select'
          value={value}
          label='Skill Level'
          onChange={updateValue}>
          <MenuItem value={"Intermediate"}>
            <Tooltip title='Intermediate (Has Had Training/Coaching and More than 5 years experience)'>
              <span>Intermediate (Has Had Training/Coaching and More than 5 years experience)</span>
            </Tooltip>
          </MenuItem>
          <MenuItem value={"Advanced"}>Advanced (Competitive player, past or present)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
