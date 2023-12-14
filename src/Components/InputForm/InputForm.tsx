import { For, createEffect, createSignal } from 'solid-js';

import './InputForm.css'
import Config from '../../Classes/Config';

const defaultConfig: Config = new Config();

let InputForm = () => {
  let d: Config = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')!) : defaultConfig;

  let successButtons: Array<HTMLElement> = [];
  let failureButtons: Array<HTMLElement> = [];

  let equipments: Array<HTMLInputElement> = [];
  let newEquipment: HTMLInputElement;

  let selectSuccessButton = ( index: number ) => {
    successButtons[index].classList.toggle('checked');
    d.DeathSaves.Successes[index] = !d.DeathSaves.Successes[index];

    localStorage.setItem('data', JSON.stringify(d));
  }

  let selectFailureButton = ( index: number ) => {
    failureButtons[index].classList.toggle('checked');
    d.DeathSaves.Failures[index] = !d.DeathSaves.Failures[index];

    localStorage.setItem('data', JSON.stringify(d));
  }

  let editEquipment = ( index: number ) => {
    let e = equipment();
    e[index] = equipments[index].value;

    e = e.filter(x => x !== '');
    setEquipment(e);
  }

  let addEquipment = () => {
    let e = equipment();
    e.push(newEquipment.value);

    e = e.filter(x => x !== '');
    setEquipment(e);

    newEquipment.value = '';
  }

  let downloadConfig = () => {
    let name = d.Name.toLowerCase() + '.cha';
    let data = JSON.stringify(d);

    let link = document.createElement('a');
    link.href = 'data:text/html,' + encodeURIComponent(data);
    link.download = name;

    document.body.appendChild(link);
    link.click();

    link.remove();
  }

  let loadFile = ( input: HTMLInputElement ) => {
    let reader = new FileReader();

    reader.onload = () => {
      try{
        let data = JSON.parse(reader.result!.toString());
        let text = '';

        Object.keys(data).forEach(key => {
          text += 'set'+key[0].toUpperCase()+key.slice(1)+'(data.'+key + ');\n';
        })

        d.DeathSaves.Successes = data.DeathSaves.Successes;
        d.DeathSaves.Failures = data.DeathSaves.Failures;

        setCharacterName(data.Name);

        setClassName(data.Class);
        setLevel(data.Level);
        setBackground(data.Background);
        setRace(data.Race);
        setAlignment(data.Alignment);
        setXP(data.ExperiencePoints);

        setStrength(data.Strength);
        setDexterity(data.Dexterity);
        setConstitution(data.Constitution);
        setIntelligence(data.Intelligence);
        setWisdom(data.Wisdom);
        setCharisma(data.Charisma);

        setStrengthMod(data.StrengthMod);
        setDexterityMod(data.DexterityMod);
        setConstitutionMod(data.ConstitutionMod);
        setIntelligenceMod(data.IntelligenceMod);
        setWisdomMod(data.WisdomMod);
        setCharismaMod(data.CharismaMod);
        setInspiration(data.Inspiration);

        setProficiencyBonus(data.ProficiencyBonus);

        setArmourClass(data.ArmourClass);
        setInitiative(data.Initiative);
        setSpeed(data.Speed);

        setPersonalityTraits(data.PersonalityTraits);
        setIdeals(data.Ideals);
        setBonds(data.Bonds);
        setFlaws(data.Flaws);

        setHitDice(data.HitDice);
        setHitDiceTotal(data.HitDiceTotal);
        setFeaturesTraits(data.FeaturesTraits);

        setCurrentHitPoints(data.HitPoints.CurrentHitPoints);
        setMaximumHitPoints(data.HitPoints.MaximumHitPoints);

        setWeapon1Name(data.AttacksSpellCasting.Weapons[0].Name);
        setWeapon1AtkBonus(data.AttacksSpellCasting.Weapons[0].AtkBonus);
        setWeapon1Damage(data.AttacksSpellCasting.Weapons[0].Damage);

        setWeapon2Name(data.AttacksSpellCasting.Weapons[1].Name);
        setWeapon2AtkBonus(data.AttacksSpellCasting.Weapons[1].AtkBonus);
        setWeapon2Damage(data.AttacksSpellCasting.Weapons[1].Damage);

        setWeapon3Name(data.AttacksSpellCasting.Weapons[2].Name);
        setWeapon3AtkBonus(data.AttacksSpellCasting.Weapons[2].AtkBonus);
        setWeapon3Damage(data.AttacksSpellCasting.Weapons[2].Damage);

        setStrengthThrow(data.SavingThrows.Strength);
        setDexterityThrow(data.SavingThrows.Dexterity);
        setConstitutionThrow(data.SavingThrows.Constitution);
        setIntelligenceThrow(data.SavingThrows.Intelligence);
        setWisdomThrow(data.SavingThrows.Wisdom);
        setCharismaThrow(data.SavingThrows.Charisma);

        setStrengthThrowProficiency(data.SavingThrows.StrengthProficiency);
        setDexterityThrowProficiency(data.SavingThrows.DexterityProficiency);
        setConstitutionThrowProficiency(data.SavingThrows.ConstitutionProficiency);
        setIntelligenceThrowProficiency(data.SavingThrows.IntelligenceProficiency);
        setWisdomThrowProficiency(data.SavingThrows.WisdomProficiency);
        setCharismaThrowProficiency(data.SavingThrows.CharismaProficiency);

        setAttacksSpellCasting(data.AttacksSpellCasting.Others);

        setOtherProficienciesLanguages(data.OtherProficienciesLanguages);
        setEquipment(data.Equipment);

        setAcrobatics(data.Skills.Acrobatics);
        setAnimalHandling(data.Skills.AnimalHandling);
        setArcana(data.Skills.Arcana);
        setAthletics(data.Skills.Athletics);
        setDeception(data.Skills.Deception);
        setHistory(data.Skills.History);
        setInsight(data.Skills.Insight);
        setIntimidation(data.Skills.Intimidation);
        setInvestigation(data.Skills.Investigation);
        setMedicine(data.Skills.Medicine);
        setNature(data.Skills.Nature);
        setPerception(data.Skills.Perception);
        setPerformance(data.Skills.Performance);
        setPersuasion(data.Skills.Persuasion);
        setReligion(data.Skills.Religion);
        setSleightOfHand(data.Skills.SleightOfHand);
        setStealth(data.Skills.Stealth);
        setSurvival(data.Skills.Survival);

        setAcrobaticsProficiency(data.Skills.AcrobaticsProficiency);
        setAnimalHandlingProficiency(data.Skills.AnimalHandlingProficiency);
        setArcanaProficiency(data.Skills.ArcanaProficiency);
        setAthleticsProficiency(data.Skills.AthleticsProficiency);
        setDeceptionProficiency(data.Skills.DeceptionProficiency);
        setHistoryProficiency(data.Skills.HistoryProficiency);
        setInsightProficiency(data.Skills.InsightProficiency);
        setIntimidationProficiency(data.Skills.IntimidationProficiency);
        setInvestigationProficiency(data.Skills.InvestigationProficiency);
        setMedicineProficiency(data.Skills.MedicineProficiency);
        setNatureProficiency(data.Skills.NatureProficiency);
        setPerceptionProficiency(data.Skills.PerceptionProficiency);
        setPerformanceProficiency(data.Skills.PerformanceProficiency);
        setPersuasionProficiency(data.Skills.PersuasionProficiency);
        setReligionProficiency(data.Skills.ReligionProficiency);
        setSleightOfHandProficiency(data.Skills.SleightOfHandProficiency);
        setStealthProficiency(data.Skills.StealthProficiency);
        setSurvivalProficiency(data.Skills.SurvivalProficiency);

        setPassiveWisdomPerception(data.PassiveWisdomPerception);
        setPassiveIntelligenceInvestigation(data.PassiveIntelligenceInvestigation);
        setPassiveWisdomInsight(data.PassiveWisdomInsight);

        setNotes(data.Notes);

        setMoneyCP(data.Money.CP);
        setMoneySP(data.Money.SP);
        setMoneyEP(data.Money.EP);
        setMoneyGP(data.Money.GP);
        setMoneyPP(data.Money.PP);
      } catch(e){
        console.error(e);
        alert('Invalid Character File. Double check the file, if it is the correct file, it may be corrupted.');
      }
    }

    reader.readAsText(input.files![0]);
  }

  let [ characterName, setCharacterName ] = createSignal(d.Name);

  let [ className, setClassName ] = createSignal(d.Class);
  let [ level, setLevel ] = createSignal(d.Level);
  let [ background, setBackground ] = createSignal(d.Background);
  let [ race, setRace ] = createSignal(d.Race);
  let [ alignment, setAlignment ] = createSignal(d.Alignment);
  let [ xp, setXP ] = createSignal(d.ExperiencePoints);

  let [ strength, setStrength ] = createSignal(d.Strength);
  let [ dexterity, setDexterity ] = createSignal(d.Dexterity);
  let [ constitution, setConstitution ] = createSignal(d.Constitution);
  let [ intelligence, setIntelligence ] = createSignal(d.Intelligence);
  let [ wisdom, setWisdom ] = createSignal(d.Wisdom);
  let [ charisma, setCharisma ] = createSignal(d.Charisma);

  let [ strengthMod, setStrengthMod ] = createSignal(d.StrengthMod);
  let [ dexterityMod, setDexterityMod ] = createSignal(d.DexterityMod);
  let [ constitutionMod, setConstitutionMod ] = createSignal(d.ConstitutionMod);
  let [ intelligenceMod, setIntelligenceMod ] = createSignal(d.IntelligenceMod);
  let [ wisdomMod, setWisdomMod ] = createSignal(d.WisdomMod);
  let [ charismaMod, setCharismaMod ] = createSignal(d.CharismaMod);

  let [ armourClass, setArmourClass ] = createSignal(d.ArmourClass);
  let [ initiative, setInitiative ] = createSignal(d.Initiative);
  let [ speed, setSpeed ] = createSignal(d.Speed);

  let [ personalityTraits, setPersonalityTraits ] = createSignal(d.PersonalityTraits);
  let [ ideals, setIdeals ] = createSignal(d.Ideals);
  let [ bonds, setBonds ] = createSignal(d.Bonds);
  let [ flaws, setFlaws ] = createSignal(d.Flaws);

  let [ inspiration, setInspiration ] = createSignal(d.Inspiration);
  let [ proficiencyBonus, setProficiencyBonus ] = createSignal(d.ProficiencyBonus);

  let [ hitDice, setHitDice ] = createSignal(d.HitDice);
  let [ hitDiceTotal, setHitDiceTotal ] = createSignal(d.HitDiceTotal);

  let [ featuresTraits, setFeaturesTraits ] = createSignal(d.FeaturesTraits);

  let [ currentHitPoints, setCurrentHitPoints ] = createSignal(d.HitPoints.CurrentHitPoints);
  let [ maximumHitPoints, setMaximumHitPoints ] = createSignal(d.HitPoints.MaximumHitPoints);
  let [ temporaryHitPoints, setTemporaryHitPoints ] = createSignal(d.HitPoints.TemporaryHitPoints);

  let [ weapon1Name, setWeapon1Name ] = createSignal(d.AttacksSpellCasting.Weapons[0].Name);
  let [ weapon1AtkBonus, setWeapon1AtkBonus ] = createSignal(d.AttacksSpellCasting.Weapons[0].AtkBonus);
  let [ weapon1Damage, setWeapon1Damage ] = createSignal(d.AttacksSpellCasting.Weapons[0].Damage);

  let [ weapon2Name, setWeapon2Name ] = createSignal(d.AttacksSpellCasting.Weapons[1].Name);
  let [ weapon2AtkBonus, setWeapon2AtkBonus ] = createSignal(d.AttacksSpellCasting.Weapons[1].AtkBonus);
  let [ weapon2Damage, setWeapon2Damage ] = createSignal(d.AttacksSpellCasting.Weapons[1].Damage);

  let [ weapon3Name, setWeapon3Name ] = createSignal(d.AttacksSpellCasting.Weapons[2].Name);
  let [ weapon3AtkBonus, setWeapon3AtkBonus ] = createSignal(d.AttacksSpellCasting.Weapons[2].AtkBonus);
  let [ weapon3Damage, setWeapon3Damage ] = createSignal(d.AttacksSpellCasting.Weapons[2].Damage);

  let [ attacksSpellCasting, setAttacksSpellCasting ] = createSignal(d.AttacksSpellCasting.Others);

  let [ strengthThrow, setStrengthThrow ] = createSignal(d.SavingThrows.Strength);
  let [ dexterityThrow, setDexterityThrow ] = createSignal(d.SavingThrows.Dexterity);
  let [ constitutionThrow, setConstitutionThrow ] = createSignal(d.SavingThrows.Constitution);
  let [ intelligenceThrow, setIntelligenceThrow ] = createSignal(d.SavingThrows.Intelligence);
  let [ wisdomThrow, setWisdomThrow ] = createSignal(d.SavingThrows.Wisdom);
  let [ charismaThrow, setCharismaThrow ] = createSignal(d.SavingThrows.Charisma);

  let [ strengthThrowProficiency, setStrengthThrowProficiency ] = createSignal(d.SavingThrows.StrengthProficiency);
  let [ dexterityThrowProficiency, setDexterityThrowProficiency ] = createSignal(d.SavingThrows.DexterityProficiency);
  let [ constitutionThrowProficiency, setConstitutionThrowProficiency ] = createSignal(d.SavingThrows.ConstitutionProficiency);
  let [ intelligenceThrowProficiency, setIntelligenceThrowProficiency ] = createSignal(d.SavingThrows.IntelligenceProficiency);
  let [ wisdomThrowProficiency, setWisdomThrowProficiency ] = createSignal(d.SavingThrows.WisdomProficiency);
  let [ charismaThrowProficiency, setCharismaThrowProficiency ] = createSignal(d.SavingThrows.CharismaProficiency);

  let [ acrobatics, setAcrobatics ] = createSignal(d.Skills.Acrobatics);
  let [ animalHandling, setAnimalHandling ] = createSignal(d.Skills.AnimalHandling);
  let [ arcana, setArcana ] = createSignal(d.Skills.Arcana);
  let [ athletics, setAthletics ] = createSignal(d.Skills.Athletics);
  let [ deception, setDeception ] = createSignal(d.Skills.Deception);
  let [ history, setHistory ] = createSignal(d.Skills.History);
  let [ insight, setInsight ] = createSignal(d.Skills.Insight);
  let [ intimidation, setIntimidation ] = createSignal(d.Skills.Intimidation);
  let [ investigation, setInvestigation ] = createSignal(d.Skills.Investigation);
  let [ medicine, setMedicine ] = createSignal(d.Skills.Medicine);
  let [ nature, setNature ] = createSignal(d.Skills.Nature);
  let [ perception, setPerception ] = createSignal(d.Skills.Perception);
  let [ performance, setPerformance ] = createSignal(d.Skills.Performance);
  let [ persuasion, setPersuasion ] = createSignal(d.Skills.Persuasion);
  let [ religion, setReligion ] = createSignal(d.Skills.Religion);
  let [ sleightOfHand, setSleightOfHand ] = createSignal(d.Skills.SleightOfHand);
  let [ stealth, setStealth ] = createSignal(d.Skills.Stealth);
  let [ survival, setSurvival ] = createSignal(d.Skills.Survival);

  let [ acrobaticsProficiency, setAcrobaticsProficiency ] = createSignal(d.Skills.AcrobaticsProficiency);
  let [ animalHandlingProficiency, setAnimalHandlingProficiency ] = createSignal(d.Skills.AnimalHandlingProficiency);
  let [ arcanaProficiency, setArcanaProficiency ] = createSignal(d.Skills.ArcanaProficiency);
  let [ athleticsProficiency, setAthleticsProficiency ] = createSignal(d.Skills.AthleticsProficiency);
  let [ deceptionProficiency, setDeceptionProficiency ] = createSignal(d.Skills.DeceptionProficiency);
  let [ historyProficiency, setHistoryProficiency ] = createSignal(d.Skills.HistoryProficiency);
  let [ insightProficiency, setInsightProficiency ] = createSignal(d.Skills.InsightProficiency);
  let [ intimidationProficiency, setIntimidationProficiency ] = createSignal(d.Skills.IntimidationProficiency);
  let [ investigationProficiency, setInvestigationProficiency ] = createSignal(d.Skills.InvestigationProficiency);
  let [ medicineProficiency, setMedicineProficiency ] = createSignal(d.Skills.MedicineProficiency);
  let [ natureProficiency, setNatureProficiency ] = createSignal(d.Skills.NatureProficiency);
  let [ perceptionProficiency, setPerceptionProficiency ] = createSignal(d.Skills.PerceptionProficiency);
  let [ performanceProficiency, setPerformanceProficiency ] = createSignal(d.Skills.PerformanceProficiency);
  let [ persuasionProficiency, setPersuasionProficiency ] = createSignal(d.Skills.PersuasionProficiency);
  let [ religionProficiency, setReligionProficiency ] = createSignal(d.Skills.ReligionProficiency);
  let [ sleightOfHandProficiency, setSleightOfHandProficiency ] = createSignal(d.Skills.SleightOfHandProficiency);
  let [ stealthProficiency, setStealthProficiency ] = createSignal(d.Skills.StealthProficiency);
  let [ survivalProficiency, setSurvivalProficiency ] = createSignal(d.Skills.SurvivalProficiency);

  let [ otherProficienciesLanguages, setOtherProficienciesLanguages ] = createSignal(d.OtherProficienciesLanguages);

  let [ equipment, setEquipment ] = createSignal(d.Equipment);

  let [ passiveWisdomPerception, setPassiveWisdomPerception ] = createSignal(d.PassiveWisdomPerception);
  let [ passiveIntelligenceInvestigation, setPassiveIntelligenceInvestigation ] = createSignal(d.PassiveIntelligenceInvestigation);
  let [ passiveWisdomInsight, setPassiveWisdomInsight ] = createSignal(d.PassiveWisdomInsight);

  let [ notes, setNotes ] = createSignal(d.Notes);

  let [ moneyCP, setMoneyCP ] = createSignal(d.Money.CP);
  let [ moneySP, setMoneySP ] = createSignal(d.Money.SP);
  let [ moneyEP, setMoneyEP ] = createSignal(d.Money.EP);
  let [ moneyGP, setMoneyGP ] = createSignal(d.Money.GP);
  let [ moneyPP, setMoneyPP ] = createSignal(d.Money.PP);

  createEffect(() => {
    d.Name = characterName();

    d.Class = className();
    d.Level = level();
    d.Background = background();
    d.Race = race();
    d.Alignment = alignment();
    d.ExperiencePoints = xp();

    d.Strength = strength();
    d.Dexterity = dexterity();
    d.Constitution = constitution();
    d.Intelligence = intelligence();
    d.Wisdom = wisdom();
    d.Charisma = charisma();

    d.StrengthMod = strengthMod();
    d.DexterityMod = dexterityMod();
    d.ConstitutionMod = constitutionMod();
    d.IntelligenceMod = intelligenceMod();
    d.WisdomMod = wisdomMod();
    d.CharismaMod = charismaMod();

    d.ArmourClass = armourClass();
    d.Initiative = initiative();
    d.Speed = speed();

    d.PersonalityTraits = personalityTraits();
    d.Ideals = ideals();
    d.Bonds = bonds();
    d.Flaws = flaws();

    d.Inspiration = inspiration();
    d.ProficiencyBonus = proficiencyBonus();

    d.HitDice = hitDice();
    d.HitDiceTotal = hitDiceTotal();

    d.FeaturesTraits = featuresTraits();

    d.HitPoints.CurrentHitPoints = currentHitPoints();
    d.HitPoints.MaximumHitPoints = maximumHitPoints();
    d.HitPoints.TemporaryHitPoints = temporaryHitPoints();

    d.AttacksSpellCasting.Weapons[0].Name = weapon1Name();
    d.AttacksSpellCasting.Weapons[0].AtkBonus = weapon1AtkBonus();
    d.AttacksSpellCasting.Weapons[0].Damage = weapon1Damage();

    d.AttacksSpellCasting.Weapons[1].Name = weapon2Name();
    d.AttacksSpellCasting.Weapons[1].AtkBonus = weapon2AtkBonus();
    d.AttacksSpellCasting.Weapons[1].Damage = weapon2Damage();

    d.AttacksSpellCasting.Weapons[2].Name = weapon3Name();
    d.AttacksSpellCasting.Weapons[2].AtkBonus = weapon3AtkBonus();
    d.AttacksSpellCasting.Weapons[2].Damage = weapon3Damage();

    d.AttacksSpellCasting.Others = attacksSpellCasting();

    d.SavingThrows.Charisma = charismaThrow();
    d.SavingThrows.Constitution = constitutionThrow();
    d.SavingThrows.Dexterity = dexterityThrow();
    d.SavingThrows.Intelligence = intelligenceThrow();
    d.SavingThrows.Strength = strengthThrow();
    d.SavingThrows.Wisdom = wisdomThrow();

    d.SavingThrows.CharismaProficiency = charismaThrowProficiency();
    d.SavingThrows.ConstitutionProficiency = constitutionThrowProficiency();
    d.SavingThrows.DexterityProficiency = dexterityThrowProficiency();
    d.SavingThrows.IntelligenceProficiency = intelligenceThrowProficiency();
    d.SavingThrows.StrengthProficiency = strengthThrowProficiency();
    d.SavingThrows.WisdomProficiency = wisdomThrowProficiency();

    d.Skills.AcrobaticsProficiency = acrobaticsProficiency();
    d.Skills.AnimalHandlingProficiency = animalHandlingProficiency();
    d.Skills.ArcanaProficiency = arcanaProficiency();
    d.Skills.AthleticsProficiency = athleticsProficiency();
    d.Skills.DeceptionProficiency = deceptionProficiency();
    d.Skills.HistoryProficiency = historyProficiency();
    d.Skills.InsightProficiency = insightProficiency();
    d.Skills.IntimidationProficiency = intimidationProficiency();
    d.Skills.InvestigationProficiency = investigationProficiency();
    d.Skills.MedicineProficiency = medicineProficiency();
    d.Skills.NatureProficiency = natureProficiency();
    d.Skills.PerceptionProficiency = perceptionProficiency();
    d.Skills.PerformanceProficiency = performanceProficiency();
    d.Skills.PersuasionProficiency = persuasionProficiency();
    d.Skills.ReligionProficiency = religionProficiency();
    d.Skills.SleightOfHandProficiency = sleightOfHandProficiency();
    d.Skills.StealthProficiency = stealthProficiency();
    d.Skills.SurvivalProficiency = survivalProficiency();

    d.Skills.Acrobatics = acrobatics();
    d.Skills.AnimalHandling = animalHandling();
    d.Skills.Arcana = arcana();
    d.Skills.Athletics = athletics();
    d.Skills.Deception = deception();
    d.Skills.History = history();
    d.Skills.Insight = insight();
    d.Skills.Intimidation = intimidation();
    d.Skills.Investigation = investigation();
    d.Skills.Medicine = medicine();
    d.Skills.Nature = nature();
    d.Skills.Perception = perception();
    d.Skills.Performance = performance();
    d.Skills.Persuasion = persuasion();
    d.Skills.Religion = religion();
    d.Skills.SleightOfHand = sleightOfHand();
    d.Skills.Stealth = stealth();
    d.Skills.Survival = survival();

    d.Equipment = equipment();
    d.OtherProficienciesLanguages = otherProficienciesLanguages();

    d.PassiveIntelligenceInvestigation = passiveIntelligenceInvestigation();
    d.PassiveWisdomInsight = passiveWisdomInsight();
    d.PassiveWisdomPerception = passiveWisdomPerception();

    d.Notes = notes();

    d.Money.CP = moneyCP();
    d.Money.SP = moneySP();
    d.Money.EP = moneyEP();
    d.Money.GP = moneyGP();
    d.Money.PP = moneyPP();

    localStorage.setItem('data', JSON.stringify(d));
  })

  return (
    <div class="input-form">
      <input type="text" placeholder='Character Name' value={characterName()} onInput={( el ) => setCharacterName(el.currentTarget.value) } style={{ "font-size": '30px', width: '300px' }} />
      <br /><br />

      <div class="row">
        <div class="column-2">
          <div class="tiny-text">Class</div>
          <input value={className()} onInput={( el ) => setClassName(el.currentTarget.value) } placeholder="Class" />

          <div class="tiny-text">Race</div>
          <input value={race()} onInput={( el ) => setRace(el.currentTarget.value) } placeholder="Race" />

          <div class="tiny-text">Level</div>
          <input value={level()} onInput={( el ) => !isNaN(parseInt(el.currentTarget.value)) ? setLevel(parseInt(el.currentTarget.value)) : null }placeholder="Level" />
        </div>
        <div class="column-2">
          <div class="tiny-text">Background</div>
          <input value={background()} onInput={( el ) => setBackground(el.currentTarget.value) } placeholder="Background" />

          <div class="tiny-text">Alignment</div>
          <input value={alignment()} onInput={( el ) => setAlignment(el.currentTarget.value) } placeholder="Alignment" />

          <div class="tiny-text">XP</div>
          <input value={xp()} onInput={( el ) => !isNaN(parseFloat(el.currentTarget.value)) ? setXP(parseFloat(el.currentTarget.value)) : null } placeholder="XP" />
        </div>
      </div>
      <br />

      <div class="tiny-text">HP</div>
      <div class="health">
        <input value={currentHitPoints()} onInput={( el ) => !isNaN(parseInt(el.currentTarget.value)) ? setCurrentHitPoints(parseInt(el.currentTarget.value)) : null } style={{ width: '100px' }} />
        <span style={{ "font-family": 'Rubik, sans-serif' }}> / </span>
        <input value={maximumHitPoints()} onInput={( el ) => !isNaN(parseInt(el.currentTarget.value)) ? setMaximumHitPoints(parseInt(el.currentTarget.value)) : null } style={{ width: '100px' }} />
      </div>

      <div class="tiny-text">Temporary HP</div>
      <input value={temporaryHitPoints()} onInput={( el ) => !isNaN(parseInt(el.currentTarget.value)) ? setTemporaryHitPoints(parseInt(el.currentTarget.value)) : null } style={{ width: '100px' }} />

      <br /><br />

      <div class="hp-bar">
        <div class="bar" style={{
          background: (currentHitPoints() + temporaryHitPoints()) /
                      (maximumHitPoints() + temporaryHitPoints()) >= 0.31 ? 'rgba(0, 255, 55, 0.5)' : 'rgba(255, 0, 0, 0.5)',
          width:  ((currentHitPoints() + temporaryHitPoints()) /
                  (maximumHitPoints() + temporaryHitPoints())) * 100 + '%'
        }}>
          { currentHitPoints() + temporaryHitPoints() }/{ maximumHitPoints() + temporaryHitPoints() }
        </div>
      </div>

      <br /><br />

      <div class="tiny-text">Stats</div>
      <div class="stats">
        <div class="stat">
          Strength<br />
          <input value={strengthMod()} onInput={( el ) => setStrengthMod(el.currentTarget.value) } style={{ width: '100px' }} /><br />
          <input value={strength()} onInput={( el ) => setStrength(el.currentTarget.value) } style={{ width: '80px', "font-size": '13px' }} />
        </div>
        <div class="stat">
          Dexterity<br />
          <input value={dexterityMod()} onInput={( el ) => setDexterityMod(el.currentTarget.value) } style={{ width: '100px' }} /><br />
          <input value={dexterity()} onInput={( el ) => setDexterity(el.currentTarget.value) }  style={{ width: '80px', "font-size": '13px' }} />
        </div>
        <div class="stat">
          Constitution<br />
          <input value={constitutionMod()} onInput={( el ) => setConstitutionMod(el.currentTarget.value) } style={{ width: '100px' }} /><br />
          <input value={constitution()} onInput={( el ) => setConstitution(el.currentTarget.value) } style={{ width: '80px', "font-size": '13px' }} />
        </div>
        <div class="stat">
          Intelligence<br />
          <input value={intelligenceMod()} onInput={( el ) => setIntelligenceMod(el.currentTarget.value) } style={{ width: '100px' }} /><br />
          <input value={intelligence()} onInput={( el ) => setIntelligence(el.currentTarget.value) } style={{ width: '80px', "font-size": '13px' }} />
        </div>
        <div class="stat">
          Wisdom<br />
          <input value={wisdomMod()} onInput={( el ) => setWisdomMod(el.currentTarget.value) } style={{ width: '100px' }} /><br />
          <input value={wisdom()} onInput={( el ) => setWisdom(el.currentTarget.value) } style={{ width: '80px', "font-size": '13px' }} />
        </div>
        <div class="stat">
          Charisma<br />
          <input value={charismaMod()} onInput={( el ) => setCharismaMod(el.currentTarget.value) } style={{ width: '100px' }} /><br />
          <input value={charisma()} onInput={( el ) => setCharisma(el.currentTarget.value) } style={{ width: '80px', "font-size": '13px' }} />
        </div>
      </div><br />

      <div class="tiny-text">Saving Throws</div>
      <div class="stats">
        <div class="stat">
          Strength<br />
          <input value={strengthThrow()} onInput={( el ) => setStrengthThrow(el.currentTarget.value) } style={{ width: '100px' }} /><br />
          <div class={ strengthThrowProficiency() ? "checkbox checked" : "checkbox" } onClick={() => setStrengthThrowProficiency(!strengthThrowProficiency())}></div>
        </div>
        <div class="stat">
          Dexterity<br />
          <input value={dexterityThrow()} onInput={( el ) => setDexterityThrow(el.currentTarget.value) } style={{ width: '100px' }} /><br />
          <div class={ dexterityThrowProficiency() ? "checkbox checked" : "checkbox" } onClick={() => setDexterityThrowProficiency(!dexterityThrowProficiency())}></div>
        </div>
        <div class="stat">
          Constitution<br />
          <input value={constitutionThrow()} onInput={( el ) => setConstitutionThrow(el.currentTarget.value) } style={{ width: '100px' }} /><br />
          <div class={ constitutionThrowProficiency() ? "checkbox checked" : "checkbox" } onClick={() => setConstitutionThrowProficiency(!constitutionThrowProficiency())}></div>
        </div>
        <div class="stat">
          Intelligence<br />
          <input value={intelligenceThrow()} onInput={( el ) => setIntelligenceThrow(el.currentTarget.value) } style={{ width: '100px' }} /><br />
          <div class={ intelligenceThrowProficiency() ? "checkbox checked" : "checkbox" } onClick={() => setIntelligenceThrowProficiency(!intelligenceThrowProficiency())}></div>
        </div>
        <div class="stat">
          Wisdom<br />
          <input value={wisdomThrow()} onInput={( el ) => setWisdomThrow(el.currentTarget.value) } style={{ width: '100px' }} /><br />
          <div class={ wisdomThrowProficiency() ? "checkbox checked" : "checkbox" } onClick={() => setWisdomThrowProficiency(!wisdomThrowProficiency())}></div>
        </div>
        <div class="stat">
          Charisma<br />
          <input value={charismaThrow()} onInput={( el ) => setCharismaThrow(el.currentTarget.value) } style={{ width: '100px' }} /><br />
          <div class={ charismaThrowProficiency() ? "checkbox checked" : "checkbox" } onClick={() => setCharismaThrowProficiency(!charismaThrowProficiency())}></div>
        </div>
      </div><br />

      <div class="row">
        <div class="column-3">
          <div class="tiny-text">Armour Class</div>
          <input value={armourClass()} onInput={( el ) => !isNaN(parseFloat(el.currentTarget.value)) ? setArmourClass(parseFloat(el.currentTarget.value)) : null } style={{ width: '100%' }} />
        </div>
        <div class="column-3">
          <div class="tiny-text">Initiative</div>
          <input value={initiative()} onInput={( el ) => setInitiative(el.currentTarget.value) }  style={{ width: '100%' }} />
        </div>
        <div class="column-3">
          <div class="tiny-text">Speed</div>
          <input value={speed()} onInput={( el ) => !isNaN(parseFloat(el.currentTarget.value)) ? setSpeed(parseFloat(el.currentTarget.value)) : null }  style={{ width: '100%' }} />
        </div>
      </div><br />

      <div class="row">
        <div class="column-2">
          <div class="tiny-text">Personality Traits</div>
          <textarea value={personalityTraits()} onInput={( el ) => setPersonalityTraits(el.currentTarget.value)}></textarea>
        </div>
        <div class="column-2">
          <div class="tiny-text">Ideals</div>
          <textarea value={ideals()} onInput={( el ) => setIdeals(el.currentTarget.value)}></textarea>
        </div>
      </div>

      <div class="row">
        <div class="column-2">
          <div class="tiny-text">Bonds</div>
          <textarea value={bonds()} onInput={( el ) => setBonds(el.currentTarget.value)}></textarea>
        </div>
        <div class="column-2">
          <div class="tiny-text">Flaws</div>
          <textarea value={flaws()} onInput={( el ) => setFlaws(el.currentTarget.value)}></textarea>
        </div>
      </div>

      <div class="row">
        <div class="column-2">
          <div class="tiny-text">Inspiration</div>
          <input value={inspiration()} onInput={( el ) => setInspiration(el.currentTarget.value) }  style={{ width: '100%' }} />
        </div>
        <div class="column-2">
          <div class="tiny-text">Proficiency Bonus</div>
          <input value={proficiencyBonus()} onInput={( el ) => setProficiencyBonus(el.currentTarget.value) }  style={{ width: '100%' }} />
        </div>
      </div><br />

      <div class="row">
        <div class="column-2">
          <div class="tiny-text">Hit Dice</div>
          <input value={hitDice()} onInput={( el ) => setHitDice(el.currentTarget.value) }  style={{ width: '100%' }} />

          <div class="tiny-text" style={{ display: 'inline-block' }}>Total</div>
          <input value={hitDiceTotal()} onInput={( el ) => setHitDiceTotal(el.currentTarget.value) }  style={{ width: '75px', 'font-size': '15px' }} />
        </div>
        <div class="column-2">
          <div class="tiny-text">Death Saves</div>
          <div class="tiny-text" style={{ display: 'inline-block' }}>Successes</div>
          <div style={{ margin: '0px 5px', display: 'inline-block' }}></div>
          <div class={ d.DeathSaves.Successes[0] ? "checkbox checked" : "checkbox"} ref={( el ) => successButtons.push(el)} onClick={() => selectSuccessButton(0)}></div>
          <div class={ d.DeathSaves.Successes[1] ? "checkbox checked" : "checkbox"} ref={( el ) => successButtons.push(el)} onClick={() => selectSuccessButton(1)}></div>
          <div class={ d.DeathSaves.Successes[2] ? "checkbox checked" : "checkbox"} ref={( el ) => successButtons.push(el)} onClick={() => selectSuccessButton(2)}></div>

          <br />
          <div class="tiny-text" style={{ display: 'inline-block' }}>Failures</div>
          <div style={{ margin: '0px 5px', display: 'inline-block' }}></div>
          <div class={ d.DeathSaves.Failures[0] ? "checkbox checked" : "checkbox"} ref={( el ) => failureButtons.push(el)} onClick={() => selectFailureButton(0)}></div>
          <div class={ d.DeathSaves.Failures[1] ? "checkbox checked" : "checkbox"} ref={( el ) => failureButtons.push(el)} onClick={() => selectFailureButton(1)}></div>
          <div class={ d.DeathSaves.Failures[2] ? "checkbox checked" : "checkbox"} ref={( el ) => failureButtons.push(el)} onClick={() => selectFailureButton(2)}></div>
        </div>
      </div><br />

      <div class="tiny-text">Skills</div>
      <div class="row" style={{ "text-align": "left", margin: 'auto', width: '80%' }}>
        <div class="column-2">
          <div class={acrobaticsProficiency() ? "checkbox checked" : "checkbox"} onClick={() => setAcrobaticsProficiency(!acrobaticsProficiency())}></div>
          <input value={acrobatics()} onInput={( el ) => setAcrobatics(el.currentTarget.value)} style={{ width: '50px', 'font-size': '15px' }} /> Acrobatics <span class="sub-text">(Dex)</span><br />

          <div class={animalHandlingProficiency() ? "checkbox checked" : "checkbox"} onClick={() => setAnimalHandlingProficiency(!animalHandlingProficiency())}></div>
          <input value={animalHandling()} onInput={( el ) => setAnimalHandling(el.currentTarget.value)} style={{ width: '50px', 'font-size': '15px' }} /> Animal Handling <span class="sub-text">(Wis)</span><br />

          <div class={arcanaProficiency() ? "checkbox checked" : "checkbox"} onClick={() => setArcanaProficiency(!arcanaProficiency())}></div>
          <input value={arcana()} onInput={( el ) => setArcana(el.currentTarget.value)} style={{ width: '50px', 'font-size': '15px' }} /> Arcana <span class="sub-text">(Int)</span><br />

          <div class={athleticsProficiency() ? "checkbox checked" : "checkbox"} onClick={() => setAthleticsProficiency(!athleticsProficiency())}></div>
          <input value={athletics()} onInput={( el ) => setAthletics(el.currentTarget.value)} style={{ width: '50px', 'font-size': '15px' }} /> Athletics <span class="sub-text">(Str)</span><br />

          <div class={deceptionProficiency() ? "checkbox checked" : "checkbox"} onClick={() => setDeceptionProficiency(!deceptionProficiency())}></div>
          <input value={deception()} onInput={( el ) => setDeception(el.currentTarget.value)} style={{ width: '50px', 'font-size': '15px' }} /> Deception <span class="sub-text">(Cha)</span><br />

          <div class={historyProficiency() ? "checkbox checked" : "checkbox"} onClick={() => setHistoryProficiency(!historyProficiency())}></div>
          <input value={history()} onInput={( el ) => setHistory(el.currentTarget.value)} style={{ width: '50px', 'font-size': '15px' }} /> History <span class="sub-text">(Int)</span><br />

          <div class={insightProficiency() ? "checkbox checked" : "checkbox"} onClick={() => setInsightProficiency(!insightProficiency())}></div>
          <input value={insight()} onInput={( el ) => setInsight(el.currentTarget.value)} style={{ width: '50px', 'font-size': '15px' }} /> Insight <span class="sub-text">(Wis)</span><br />

          <div class={intimidationProficiency() ? "checkbox checked" : "checkbox"} onClick={() => setIntimidationProficiency(!intimidationProficiency())}></div>
          <input value={intimidation()} onInput={( el ) => setIntimidation(el.currentTarget.value)} style={{ width: '50px', 'font-size': '15px' }} /> Intimidation <span class="sub-text">(Cha)</span><br />

          <div class={investigationProficiency() ? "checkbox checked" : "checkbox"} onClick={() => setInvestigationProficiency(!investigationProficiency())}></div>
          <input value={investigation()} onInput={( el ) => setInvestigation(el.currentTarget.value)} style={{ width: '50px', 'font-size': '15px' }} /> Investigation <span class="sub-text">(Int)</span>
        </div>
        <div class="column-2">
          <div class={medicineProficiency() ? "checkbox checked" : "checkbox"} onClick={() => setMedicineProficiency(!medicineProficiency())}></div>
          <input value={medicine()} onInput={( el ) => setMedicine(el.currentTarget.value)} style={{ width: '50px', 'font-size': '15px' }} /> Medicine <span class="sub-text">(Wis)</span><br />

          <div class={natureProficiency() ? "checkbox checked" : "checkbox"} onClick={() => setNatureProficiency(!natureProficiency())}></div>
          <input value={nature()} onInput={( el ) => setNature(el.currentTarget.value)} style={{ width: '50px', 'font-size': '15px' }} /> Nature <span class="sub-text">(Int)</span><br />

          <div class={perceptionProficiency() ? "checkbox checked" : "checkbox"} onClick={() => setPerceptionProficiency(!perceptionProficiency())}></div>
          <input value={perception()} onInput={( el ) => setPerception(el.currentTarget.value)} style={{ width: '50px', 'font-size': '15px' }} /> Perception <span class="sub-text">(Wis)</span><br />

          <div class={performanceProficiency() ? "checkbox checked" : "checkbox"} onClick={() => setPerformanceProficiency(!performanceProficiency())}></div>
          <input value={performance()} onInput={( el ) => setPerformance(el.currentTarget.value)} style={{ width: '50px', 'font-size': '15px' }} /> Performance <span class="sub-text">(Cha)</span><br />

          <div class={persuasionProficiency() ? "checkbox checked" : "checkbox"} onClick={() => setPersuasionProficiency(!persuasionProficiency())}></div>
          <input value={persuasion()} onInput={( el ) => setPersuasion(el.currentTarget.value)} style={{ width: '50px', 'font-size': '15px' }} /> Persuasion <span class="sub-text">(Cha)</span><br />

          <div class={religionProficiency() ? "checkbox checked" : "checkbox"} onClick={() => setReligionProficiency(!religionProficiency())}></div>
          <input value={religion()} onInput={( el ) => setReligion(el.currentTarget.value)} style={{ width: '50px', 'font-size': '15px' }} /> Religion <span class="sub-text">(Int)</span><br />

          <div  class={sleightOfHandProficiency() ? "checkbox checked" : "checkbox"} onClick={() => setSleightOfHandProficiency(!sleightOfHandProficiency())}></div>
          <input value={sleightOfHand()} onInput={( el ) => setSleightOfHand(el.currentTarget.value)} style={{ width: '50px', 'font-size': '15px' }} /> Sleight of Hand  <span class="sub-text">(Dex)</span><br />

          <div class={stealthProficiency() ? "checkbox checked" : "checkbox"} onClick={() => setStealthProficiency(!stealthProficiency())}></div>
          <input value={stealth()} onInput={( el ) => setStealth(el.currentTarget.value)} style={{ width: '50px', 'font-size': '15px' }} /> Stealth <span class="sub-text">(Dex)</span><br />

          <div class={survivalProficiency() ? "checkbox checked" : "checkbox"} onClick={() => setSurvivalProficiency(!survivalProficiency())}></div>
          <input value={survival()} onInput={( el ) => setSurvival(el.currentTarget.value)} style={{ width: '50px', 'font-size': '15px' }} /> Survival <span class="sub-text">(Wis)</span>
        </div>
      </div><br />

      <div class="tiny-text">Money</div>
      <div class="row">
        <div class="column-5">
          <div class="tiny-text">CP</div>
          <input value={moneyCP()} onInput={( el ) => !isNaN(parseInt(el.currentTarget.value)) ? setMoneyCP(parseInt(el.currentTarget.value)) : null } />
        </div>
        <div class="column-5">
          <div class="tiny-text">SP</div>
          <input value={moneySP()} onInput={( el ) => !isNaN(parseInt(el.currentTarget.value)) ? setMoneySP(parseInt(el.currentTarget.value)) : null } />
        </div>
        <div class="column-5">
          <div class="tiny-text">EP</div>
          <input value={moneyEP()} onInput={( el ) => !isNaN(parseInt(el.currentTarget.value)) ? setMoneyEP(parseInt(el.currentTarget.value)) : null } />
        </div>
        <div class="column-5">
          <div class="tiny-text">GP</div>
          <input value={moneyGP()} onInput={( el ) => !isNaN(parseInt(el.currentTarget.value)) ? setMoneyGP(parseInt(el.currentTarget.value)) : null } />
        </div>
        <div class="column-5">
          <div class="tiny-text">PP</div>
          <input value={moneyPP()} onInput={( el ) => !isNaN(parseInt(el.currentTarget.value)) ? setMoneyPP(parseInt(el.currentTarget.value)) : null } />
        </div>
      </div>

      <div>
        <div class="tiny-text">Features and Traits</div>
        <textarea value={featuresTraits()} onInput={( el ) => setFeaturesTraits(el.currentTarget.value)} style={{ height: '200px' }}></textarea>
      </div><br />

      <div>
        <div class="tiny-text">Attacks and Spellcasting</div>

        <div class="row">
          <div class="column-2">
            <input value={weapon1Name()} onInput={( el ) => setWeapon1Name(el.currentTarget.value) } />
            <input value={weapon2Name()} onInput={( el ) => setWeapon2Name(el.currentTarget.value) } />
            <input value={weapon3Name()} onInput={( el ) => setWeapon3Name(el.currentTarget.value) } />
          </div>
          <div class="column-4">
            <input value={weapon1AtkBonus()} onInput={( el ) => setWeapon1AtkBonus(el.currentTarget.value) } />
            <input value={weapon2AtkBonus()} onInput={( el ) => setWeapon2AtkBonus(el.currentTarget.value) } />
            <input value={weapon3AtkBonus()} onInput={( el ) => setWeapon3AtkBonus(el.currentTarget.value) } />
          </div>
          <div class="column-2">
            <input value={weapon1Damage()} onInput={( el ) => setWeapon1Damage(el.currentTarget.value) } />
            <input value={weapon2Damage()} onInput={( el ) => setWeapon2Damage(el.currentTarget.value) } />
            <input value={weapon3Damage()} onInput={( el ) => setWeapon3Damage(el.currentTarget.value) } />
          </div>
        </div><br />

        <textarea value={attacksSpellCasting()} onInput={( el ) => setAttacksSpellCasting(el.currentTarget.value)} style={{ height: '150px' }}></textarea>
      </div>

      <div class="row">
        <div class="column-3">
          <div class="tiny-text">Passive Wisdom<br />Perception</div>
          <input value={passiveWisdomPerception()} onInput={( el ) => !isNaN(parseInt(el.currentTarget.value)) ? setPassiveWisdomPerception(parseInt(el.currentTarget.value)) : null } />
        </div>
        <div class="column-3">
          <div class="tiny-text">Passive Int<br />Investigation</div>
          <input value={passiveIntelligenceInvestigation()} onInput={( el ) => !isNaN(parseInt(el.currentTarget.value)) ? setPassiveIntelligenceInvestigation(parseInt(el.currentTarget.value)) : null } />
        </div>
        <div class="column-3">
          <div class="tiny-text">Passive Wisdom<br />Insight</div>
          <input value={passiveWisdomInsight()} onInput={( el ) => !isNaN(parseInt(el.currentTarget.value)) ? setPassiveWisdomInsight(parseInt(el.currentTarget.value)) : null } />
        </div>
      </div><br />

      <div class="tiny-text">Other Proficiencies and Languages</div>
      <textarea value={otherProficienciesLanguages()} onInput={( el ) => setOtherProficienciesLanguages(el.currentTarget.value)} style={{ height: '150px' }}></textarea>
      <br />

      <div class="equipment">
        <div class="tiny-text">Equipment</div>

        <div class="equipment-list">
          <For each={equipment()}>
            {( item, index ) =>
              <div class="list-item">
                <div class="list-icon"></div>
                <input value={item} ref={( el ) => equipments.push(el) } onChange={() => editEquipment(index()) } />
              </div>
            }
          </For>

          <div class="list-item">
            <div class="list-icon"></div>
            <input ref={( el ) => newEquipment = el } onChange={() => addEquipment() } />
          </div>
        </div>
      </div><br />

      <div class="tiny-text">Notes</div>
      <textarea value={notes()} onInput={( el ) => setNotes(el.currentTarget.value)} style={{ height: '250px' }}></textarea>

      <br />
      <div class="button" onClick={() => downloadConfig()}>Save</div>

      <input type="file" style={{ display: 'none' }} id="load-file" accept=".cha" onChange={( el ) => loadFile(el.currentTarget) } multiple={false} />

      <label for="load-file">
        <div class="button">Load</div>
      </label>

      <br /><br /><br />
    </div>
  )
}

export default InputForm