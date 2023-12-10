class HitPoints{
  MaximumHitPoints: number = 0;
  CurrentHitPoints: number = 0;
  TemporaryHitPoints: number = 0;
}

class DeathSaves{
  Successes: Array<boolean> = [ false, false, false ];
  Failures: Array<boolean> = [ false, false, false ];
}

class Money{
  CP: number = 0;
  SP: number = 0;
  EP: number = 0;
  GP: number = 0;
  PP: number = 0;
}

class Weapon{
  Name: string = '';
  AtkBonus: string = '';
  Damage: string = '';
}

class AttackSpellCasting{
  Weapons: Array<Weapon> = [ new Weapon(), new Weapon(), new Weapon() ];
  Others: string = '';
}

class Skills{
  Acrobatics: Number = 0;
  AnimalHandling: Number = 0;
  Arcana: Number = 0;
  Athletics: Number = 0;
  Deception: Number = 0;
  History: Number = 0;
  Insight: Number = 0;
  Intimidation: Number = 0;
  Investigation: Number = 0;
  Medicine: Number = 0;
  Nature: Number = 0;
  Perception: Number = 0;
  Performance: Number = 0;
  Persuasion: Number = 0;
  Religion: Number = 0;
  SleightOfHand: Number = 0;
  Stealth: Number = 0;
  Survival: Number = 0;

  AcrobaticsProficiency: boolean = false;
  AnimalHandlingProficiency: boolean = false;
  ArcanaProficiency: boolean = false;
  AthleticsProficiency: boolean = false;
  DeceptionProficiency: boolean = false;
  HistoryProficiency: boolean = false;
  InsightProficiency: boolean = false;
  IntimidationProficiency: boolean = false;
  InvestigationProficiency: boolean = false;
  MedicineProficiency: boolean = false;
  NatureProficiency: boolean = false;
  PerceptionProficiency: boolean = false;
  PerformanceProficiency: boolean = false;
  PersuasionProficiency: boolean = false;
  ReligionProficiency: boolean = false;
  SleightOfHandProficiency: boolean = false;
  StealthProficiency: boolean = false;
  SurvivalProficiency: boolean = false;
}

class SavingThrows{
  Strength: string = '';
  Dexterity: string = '';
  Constitution: string = '';
  Intelligence: string = '';
  Wisdom: string = '';
  Charisma: string = '';

  StrengthProficiency: boolean = false;
  DexterityProficiency: boolean = false;
  ConstitutionProficiency: boolean = false;
  IntelligenceProficiency: boolean = false;
  WisdomProficiency: boolean = false;
  CharismaProficiency: boolean = false;
}

class Config{
  Name: string = '';

  Class: string = '';
  Level: number = 0;
  Background: string = '';
  Race: string = '';
  Alignment: string = '';
  ExperiencePoints: number = 0;

  Strength: string = '';
  Dexterity: string = '';
  Constitution: string = '';
  Intelligence: string = '';
  Wisdom: string = '';
  Charisma: string = '';

  StrengthMod: string = '';
  DexterityMod: string = '';
  ConstitutionMod: string = '';
  IntelligenceMod: string = '';
  WisdomMod: string = '';
  CharismaMod: string = '';

  Inspiration: string = '';
  ProficiencyBonus: string = '';

  ArmourClass: number = 0;
  Initiative: string = '';
  Speed: number = 0;

  PersonalityTraits: string = '';

  Ideals: string = '';
  Bonds: string = '';
  Flaws: string = '';

  HitPoints: HitPoints = new HitPoints();
  HitDice: string = '';
  HitDiceTotal: string = '';

  DeathSaves: DeathSaves = new DeathSaves();

  OtherProficienciesLanguages: Array<string> = [];

  Equipment: Array<string> = [];
  Money: Money = new Money();

  AttacksSpellCasting: AttackSpellCasting = new AttackSpellCasting();

  FeaturesTraits: string = '';

  Skills: Skills = new Skills();
  SavingThrows: SavingThrows = new SavingThrows();

  PassiveWisdomPerception: number = 0;
  PassiveIntelligenceInvestigation: number = 0;
  PassiveWisdomInsight: number = 0;

  Other: string = '';
  Notes: string = '';
}

export default Config;