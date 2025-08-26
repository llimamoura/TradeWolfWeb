import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function ProofResidencyComponent() {
  const navigate = useNavigate();
  const [nacionality, setNacionality] = useState("");

  const onSubmit = () => {
    if (!nacionality) {
      alert("Please select a nacionality before proceeding.");
      return;
    }

    console.log("Selected nacionality:", nacionality); 
    navigate("/create-user")
  };

  return (
    <section className="w-full font-manrope mb-12 lg:mb-0 lg:justify-center">
      <h1 className="flex justify-center lg:mb-10 text-3xl lg:text-4xl lg:text-center text-center font-extrabold text-foreground leading-tight mb-5">
        Proof of Residency
      </h1>

      <p className="hidden lg:flex font-medium lg:text-center text-center text-sm text-muted-foreground mb-15">
        We are required to verify your identity before you can use the
        application. Your information will be encrypted and stored securely.
      </p>

      <div className="relative mb-8 w-full">
        <label className="absolute -top-3 left-3 bg-background px-2 text-primary text-sm font-medium z-10">
          Nacionality
        </label>

  <Select onValueChange={setNacionality}>
    <SelectTrigger className="w-full font-manrope lg:mt-0 mt-10">
      <SelectValue placeholder="Select a Nacionality" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Nationality</SelectLabel>
        <SelectItem value="AF">
          <div className="flex items-center gap-2">
          <img
          src="https://flagcdn.com/16x12/af.png"
          width="20"
          height="20"
          alt="Afghanistan flag" 
          aria-label="Afghanistan flag"
          />
            Afghanistan (AF)
          </div>
          </SelectItem>
        <SelectItem value="AL">
        <div className="flex items-center gap-2">
          <img
          src="https://flagcdn.com/16x12/al.png"
          width="20"
          height="20"
          alt="Albania flag" 
          aria-label="Albania flag"/>
            Albania (AL)
          </div>
          </SelectItem>
        <SelectItem value="DZ">Algeria (DZ)</SelectItem>
        <SelectItem value="AD">Andorra (AD)</SelectItem>
        <SelectItem value="AO">Angola (AO)</SelectItem>
        <SelectItem value="AG">Antigua and Barbuda (AG)</SelectItem>
        <SelectItem value="AR">Argentina (AR)</SelectItem>
        <SelectItem value="AM">Armenia (AM)</SelectItem>
        <SelectItem value="AU">Australia (AU)</SelectItem>
        <SelectItem value="AT">Austria (AT)</SelectItem>
        <SelectItem value="AZ">Azerbaijan (AZ)</SelectItem>
        <SelectItem value="BS">Bahamas (BS)</SelectItem>
        <SelectItem value="BH">Bahrain (BH)</SelectItem>
        <SelectItem value="BD">Bangladesh (BD)</SelectItem>
        <SelectItem value="BB">Barbados (BB)</SelectItem>
        <SelectItem value="BY">Belarus (BY)</SelectItem>
        <SelectItem value="BE">Belgium (BE)</SelectItem>
        <SelectItem value="BZ">Belize (BZ)</SelectItem>
        <SelectItem value="BJ">Benin (BJ)</SelectItem>
        <SelectItem value="BT">Bhutan (BT)</SelectItem>
        <SelectItem value="BO">Bolivia (BO)</SelectItem>
        <SelectItem value="BA">Bosnia and Herzegovina (BA)</SelectItem>
        <SelectItem value="BW">Botswana (BW)</SelectItem>
        <SelectItem value="BR">Brazil (BR)</SelectItem>
        <SelectItem value="BN">Brunei (BN)</SelectItem>
        <SelectItem value="BG">Bulgaria (BG)</SelectItem>
        <SelectItem value="BF">Burkina Faso (BF)</SelectItem>
        <SelectItem value="BI">Burundi (BI)</SelectItem>
        <SelectItem value="CV">Cabo Verde (CV)</SelectItem>
        <SelectItem value="KH">Cambodia (KH)</SelectItem>
        <SelectItem value="CM">Cameroon (CM)</SelectItem>
        <SelectItem value="CA">Canada (CA)</SelectItem>
        <SelectItem value="CF">Central African Republic (CF)</SelectItem>
        <SelectItem value="TD">Chad (TD)</SelectItem>
        <SelectItem value="CL">Chile (CL)</SelectItem>
        <SelectItem value="CN">China (CN)</SelectItem>
        <SelectItem value="CO">Colombia (CO)</SelectItem>
        <SelectItem value="KM">Comoros (KM)</SelectItem>
        <SelectItem value="CG">Congo (CG)</SelectItem>
        <SelectItem value="CD">Congo (Democratic Republic) (CD)</SelectItem>
        <SelectItem value="CR">Costa Rica (CR)</SelectItem>
        <SelectItem value="CI">Côte d’Ivoire (CI)</SelectItem>
        <SelectItem value="HR">Croatia (HR)</SelectItem>
        <SelectItem value="CU">Cuba (CU)</SelectItem>
        <SelectItem value="CY">Cyprus (CY)</SelectItem>
        <SelectItem value="CZ">Czechia (CZ)</SelectItem>
        <SelectItem value="DK">Denmark (DK)</SelectItem>
        <SelectItem value="DJ">Djibouti (DJ)</SelectItem>
        <SelectItem value="DM">Dominica (DM)</SelectItem>
        <SelectItem value="DO">Dominican Republic (DO)</SelectItem>
        <SelectItem value="TL">East Timor (TL)</SelectItem>
        <SelectItem value="EC">Ecuador (EC)</SelectItem>
        <SelectItem value="EG">Egypt (EG)</SelectItem>
        <SelectItem value="SV">El Salvador (SV)</SelectItem>
        <SelectItem value="GQ">Equatorial Guinea (GQ)</SelectItem>
        <SelectItem value="ER">Eritrea (ER)</SelectItem>
        <SelectItem value="EE">Estonia (EE)</SelectItem>
        <SelectItem value="SZ">Eswatini (SZ)</SelectItem>
        <SelectItem value="ET">Ethiopia (ET)</SelectItem>
        <SelectItem value="FJ">Fiji (FJ)</SelectItem>
        <SelectItem value="FI">Finland (FI)</SelectItem>
        <SelectItem value="FR">France (FR)</SelectItem>
        <SelectItem value="GA">Gabon (GA)</SelectItem>
        <SelectItem value="GM">Gambia (GM)</SelectItem>
        <SelectItem value="GE">Georgia (GE)</SelectItem>
        <SelectItem value="DE">Germany (DE)</SelectItem>
        <SelectItem value="GH">Ghana (GH)</SelectItem>
        <SelectItem value="GR">Greece (GR)</SelectItem>
        <SelectItem value="GD">Grenada (GD)</SelectItem>
        <SelectItem value="GT">Guatemala (GT)</SelectItem>
        <SelectItem value="GN">Guinea (GN)</SelectItem>
        <SelectItem value="GW">Guinea-Bissau (GW)</SelectItem>
        <SelectItem value="GY">Guyana (GY)</SelectItem>
        <SelectItem value="HT">Haiti (HT)</SelectItem>
        <SelectItem value="VA">Vatican City (VA)</SelectItem>
        <SelectItem value="HN">Honduras (HN)</SelectItem>
        <SelectItem value="HU">Hungary (HU)</SelectItem>
        <SelectItem value="IS">Iceland (IS)</SelectItem>
        <SelectItem value="IN">India (IN)</SelectItem>
        <SelectItem value="ID">Indonesia (ID)</SelectItem>
        <SelectItem value="IR">Iran (IR)</SelectItem>
        <SelectItem value="IQ">Iraq (IQ)</SelectItem>
        <SelectItem value="IE">Ireland (IE)</SelectItem>
        <SelectItem value="IL">Israel (IL)</SelectItem>
        <SelectItem value="IT">Italy (IT)</SelectItem>
        <SelectItem value="JM">Jamaica (JM)</SelectItem>
        <SelectItem value="JP">Japan (JP)</SelectItem>
        <SelectItem value="JO">Jordan (JO)</SelectItem>
        <SelectItem value="KZ">Kazakhstan (KZ)</SelectItem>
        <SelectItem value="KE">Kenya (KE)</SelectItem>
        <SelectItem value="KI">Kiribati (KI)</SelectItem>
        <SelectItem value="XK">Kosovo (XK)</SelectItem>
        <SelectItem value="KW">Kuwait (KW)</SelectItem>
        <SelectItem value="KG">Kyrgyzstan (KG)</SelectItem>
        <SelectItem value="LA">Laos (LA)</SelectItem>
        <SelectItem value="LV">Latvia (LV)</SelectItem>
        <SelectItem value="LB">Lebanon (LB)</SelectItem>
        <SelectItem value="LS">Lesotho (LS)</SelectItem>
        <SelectItem value="LR">Liberia (LR)</SelectItem>
        <SelectItem value="LY">Libya (LY)</SelectItem>
        <SelectItem value="LI">Liechtenstein (LI)</SelectItem>
        <SelectItem value="LT">Lithuania (LT)</SelectItem>
        <SelectItem value="LU">Luxembourg (LU)</SelectItem>
        <SelectItem value="MG">Madagascar (MG)</SelectItem>
        <SelectItem value="MW">Malawi (MW)</SelectItem>
        <SelectItem value="MY">Malaysia (MY)</SelectItem>
        <SelectItem value="MV">Maldives (MV)</SelectItem>
        <SelectItem value="ML">Mali (ML)</SelectItem>
        <SelectItem value="MT">Malta (MT)</SelectItem>
        <SelectItem value="MH">Marshall Islands (MH)</SelectItem>
        <SelectItem value="MR">Mauritania (MR)</SelectItem>
        <SelectItem value="MU">Mauritius (MU)</SelectItem>
        <SelectItem value="MX">Mexico (MX)</SelectItem>
        <SelectItem value="FM">Micronesia (FM)</SelectItem>
        <SelectItem value="MD">Moldova (MD)</SelectItem>
        <SelectItem value="MC">Monaco (MC)</SelectItem>
        <SelectItem value="MN">Mongolia (MN)</SelectItem>
        <SelectItem value="ME">Montenegro (ME)</SelectItem>
        <SelectItem value="MA">Morocco (MA)</SelectItem>
        <SelectItem value="MZ">Mozambique (MZ)</SelectItem>
        <SelectItem value="MM">Myanmar (MM)</SelectItem>
        <SelectItem value="NA">Namibia (NA)</SelectItem>
        <SelectItem value="NR">Nauru (NR)</SelectItem>
        <SelectItem value="NP">Nepal (NP)</SelectItem>
        <SelectItem value="NL">Netherlands (NL)</SelectItem>
        <SelectItem value="NZ">New Zealand (NZ)</SelectItem>
        <SelectItem value="NI">Nicaragua (NI)</SelectItem>
        <SelectItem value="NE">Niger (NE)</SelectItem>
        <SelectItem value="NG">Nigeria (NG)</SelectItem>
        <SelectItem value="KP">North Korea (KP)</SelectItem>
        <SelectItem value="MK">North Macedonia (MK)</SelectItem>
        <SelectItem value="NO">Norway (NO)</SelectItem>
        <SelectItem value="OM">Oman (OM)</SelectItem>
        <SelectItem value="PK">Pakistan (PK)</SelectItem>
        <SelectItem value="PW">Palau (PW)</SelectItem>
        <SelectItem value="PS">Palestine (PS)</SelectItem>
        <SelectItem value="PA">Panama (PA)</SelectItem>
        <SelectItem value="PG">Papua New Guinea (PG)</SelectItem>
        <SelectItem value="PY">Paraguay (PY)</SelectItem>
        <SelectItem value="PE">Peru (PE)</SelectItem>
        <SelectItem value="PH">Philippines (PH)</SelectItem>
        <SelectItem value="PL">Poland (PL)</SelectItem>
        <SelectItem value="PT">Portugal (PT)</SelectItem>
        <SelectItem value="QA">Qatar (QA)</SelectItem>
        <SelectItem value="RO">Romania (RO)</SelectItem>
        <SelectItem value="RU">Russia (RU)</SelectItem>
        <SelectItem value="RW">Rwanda (RW)</SelectItem>
        <SelectItem value="KN">Saint Kitts and Nevis (KN)</SelectItem>
        <SelectItem value="LC">Saint Lucia (LC)</SelectItem>
        <SelectItem value="VC">Saint Vincent and the Grenadines (VC)</SelectItem>
        <SelectItem value="WS">Samoa (WS)</SelectItem>
        <SelectItem value="SM">San Marino (SM)</SelectItem>
        <SelectItem value="ST">São Tomé and Príncipe (ST)</SelectItem>
        <SelectItem value="SA">Saudi Arabia (SA)</SelectItem>
        <SelectItem value="SN">Senegal (SN)</SelectItem>
        <SelectItem value="RS">Serbia (RS)</SelectItem>
        <SelectItem value="SC">Seychelles (SC)</SelectItem>
        <SelectItem value="SL">Sierra Leone (SL)</SelectItem>
        <SelectItem value="SG">Singapore (SG)</SelectItem>
        <SelectItem value="SK">Slovakia (SK)</SelectItem>
        <SelectItem value="SI">Slovenia (SI)</SelectItem>
        <SelectItem value="SB">Solomon Islands (SB)</SelectItem>
        <SelectItem value="SO">Somalia (SO)</SelectItem>
        <SelectItem value="ZA">South Africa (ZA)</SelectItem>
        <SelectItem value="KR">South Korea (KR)</SelectItem>
        <SelectItem value="SS">South Sudan (SS)</SelectItem>
        <SelectItem value="ES">Spain (ES)</SelectItem>
        <SelectItem value="LK">Sri Lanka (LK)</SelectItem>
        <SelectItem value="SD">Sudan (SD)</SelectItem>
        <SelectItem value="SR">Suriname (SR)</SelectItem>
        <SelectItem value="SE">Sweden (SE)</SelectItem>
        <SelectItem value="CH">Switzerland (CH)</SelectItem>
        <SelectItem value="SY">Syria (SY)</SelectItem>
        <SelectItem value="TW">Taiwan (TW)</SelectItem>
        <SelectItem value="TJ">Tajikistan (TJ)</SelectItem>
        <SelectItem value="TZ">Tanzania (TZ)</SelectItem>
        <SelectItem value="TH">Thailand (TH)</SelectItem>
        <SelectItem value="TG">Togo (TG)</SelectItem>
        <SelectItem value="TO">Tonga (TO)</SelectItem>
        <SelectItem value="TT">Trinidad and Tobago (TT)</SelectItem>
        <SelectItem value="TN">Tunisia (TN)</SelectItem>
        <SelectItem value="TR">Turkey (TR)</SelectItem>
        <SelectItem value="TM">Turkmenistan (TM)</SelectItem>
        <SelectItem value="TV">Tuvalu (TV)</SelectItem>
        <SelectItem value="UG">Uganda (UG)</SelectItem>
        <SelectItem value="UA">Ukraine (UA)</SelectItem>
        <SelectItem value="AE">United Arab Emirates (AE)</SelectItem>
        <SelectItem value="GB">United Kingdom (GB)</SelectItem>
        <SelectItem value="US">United States (US)</SelectItem>
        <SelectItem value="UY">Uruguay (UY)</SelectItem>
        <SelectItem value="UZ">Uzbekistan (UZ)</SelectItem>
        <SelectItem value="VU">Vanuatu (VU)</SelectItem>
        <SelectItem value="VE">Venezuela (VE)</SelectItem>
        <SelectItem value="VN">Vietnam (VN)</SelectItem>
        <SelectItem value="YE">Yemen (YE)</SelectItem>
        <SelectItem value="ZM">Zambia (ZM)</SelectItem>
        <SelectItem value="ZW">Zimbabwe (ZW)</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>

  <div className="p-5 mt-10 bg-quartenary rounded-xl font-manrope"> 
  <RadioGroup
    defaultValue="National-identity-card"
    className="flex items-center justify-center space-x-3"
  >
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="National-identity-card" id="National-identity-card" />
      <Label htmlFor="National-identity-card">National identity card</Label>
    </div>

    <Separator orientation="vertical" className="!h-6 border border-teste" />

    <div className="flex items-center space-x-2">
      <RadioGroupItem value="Passport" id="Passport" />
      <Label htmlFor="Passport">Passport</Label>
    </div>

    <Separator orientation="vertical" className="!h-6 border border-teste" />

    <div className="flex items-center space-x-2">
      <RadioGroupItem value="Driver-license" id="Driver-license" />
      <Label htmlFor="Driver-license">Driver license</Label>
    </div>
  </RadioGroup>
</div>
</div>
      <Button type="button" onClick={onSubmit}>
        Verify Identity
      </Button>
    </section>
  );
}
